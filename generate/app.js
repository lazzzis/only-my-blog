const MarkedPost = require('./models/MarkedPost')
const Tags = require('./models/Tags')
const fse = require('fs-extra')
const path = require('path')
const config = require('../config')
const chunk = require('lodash.chunk')
const Rss = require('./models/Rss')

const URI = 'https://lazzzis.github.io/'

/**
walk through the directory to create the api json, it will create the api
in the identical relative path.

e.g. root1 is /source, root2 is /api
then, /source/test/index.md will be outputed to /api/test/index.json.
It will reserve the file name except the extname.
*/
async function walk (filepath, outputPath) {
  if (path.parse(filepath).name === '_posts') {
    return
  }
  let stat = fse.statSync(filepath)
  if (stat.isFile() && path.extname(filepath) === '.md') {
    let post = await MarkedPost.fromFile(filepath)
    await post.save(
      path.resolve(
        path.parse(outputPath).dir,
        path.parse(filepath).name + '.json')
    )
  } else if (stat.isDirectory()) {
    const files = await fse.readdir(filepath)
    await Promise.all(
      files.map((file) => walk(
      path.resolve(filepath, file),
      path.resolve(outputPath, file)
    )))
  }
}

/*
  tags.json
  posts.json
  pages
    - [page number].json // each page
  tags
    - [tag.name].json // each tag and its articles
  articles
    - [post.title].json // each article
*/

async function main () {
  const files = await fse.readdir(path.resolve(__dirname, 'source/_posts'))

  let posts = files.filter((file) =>
    fse.lstatSync(path.resolve(__dirname, 'source/_posts', file)).isFile() &&
      path.extname(file) === '.md'
  )

  posts = await Promise.all(
    posts.map((post) =>
      MarkedPost.fromFile(path.resolve(__dirname, 'source/_posts', post))
    )
  )

  posts.sort((p1, p2) => p1.date.getTime() < p2.date.getTime() ? 1 : -1)

  const dir = path.resolve(__dirname, '../dist/api')
  await fse.ensureDir(dir)
  await Promise.all(
    posts.map(async (post) => {
      return post.save(path.resolve(dir, `articles/${post.filename}.json`))
    })
  )

  let tags = new Tags(posts)
  await fse.writeFile(
    path.resolve(dir, 'tags.json'),
    tags.toJSON()
  )

  await Promise.all(
    tags.map((tag) => {
      return tag.save(
        path.resolve(dir, `tags/${tag.slug}.json`)
      )
    })
  )

  let pages = chunk(posts, config.perPage)

  await fse.writeFile(
    path.resolve(dir, 'posts.json'),
    JSON.stringify({
      pages: pages.length,
      perPage: config.perPage,
      posts: pages[0].map((post) => post.lean(false))
    }
    )
  )

  await fse.ensureDir(path.resolve(dir, 'pages'))
  await Promise.all(
    pages.map((page, index) => {
      fse.writeFile(
        path.resolve(dir, 'pages', `${index + 1}.json`),
        JSON.stringify({
          page: index,
          posts: page.map((post) => post.lean(false))
        })
      )
    })
  )

  // Other files (not _posts but also markdown files)
  await walk(
    path.resolve(__dirname, 'source'),
    dir
  )

  // atom
  let rss = new Rss(posts, {
    title: 'lazzzis',
    id: URI,
    link: URI,
    author: {
      name: 'lazzzis',
      email: 'shenlijin@outlook.com',
      link: URI
    }
  })
  await rss.save(path.resolve(dir, '../atom.xml'))
}

main()
  .then(() => console.log('ok'))
  .catch((err) => console.log(err))
