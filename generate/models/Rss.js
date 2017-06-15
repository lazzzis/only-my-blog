const Feed = require('feed')
const fsp = require('fs-promise')
const path = require('path')

class Rss {
  constructor(posts = [], config = {}) {
    posts = posts.concat().sort((p1, p2) => p1.mtime < p2.mtime) // not mutate
    config.updated = posts[0].mtime
    this.feed = new Feed(config)
    posts.forEach((post) => {
      this.feed.addItem({
        title: post.title,
        link: `https://lazzis.github.io/#/blogs/${post.slug}`, // TODO
        id: `https://lazzis.github.io/#/blogs/${post.slug}`, // TODO
        updated: post.mtime,
        date: post.birthtime,
        content: post.content,
        author: config.author
      })
    })
  }

  get atom1() {
    return this.feed.atom1()
  }

  async save(savePath) {
    await fsp.writeFile(savePath, this.atom1)
  }
}

module.exports = Rss
