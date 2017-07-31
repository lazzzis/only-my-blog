const Post = require('./Post')
const Render = require('./Render')
const slugify = require('../utils').slugify
const fsp = require('fs-extra')
const path = require('path')
const Url = require('url')

class MarkedPost extends Post {
  constructor (content, filepath) {
    super(content)
    this.rawContent = this.content // markdown format rather than html
    this.content = Render(this.content)

    if (filepath) {
      this.filename = path.parse(filepath).name
      this.mtime = fsp.statSync(filepath).mtime

      if (typeof this.birthtime === 'undefined') {
        this.birthtime = fsp.statSync(filepath).birthtime
      }

      // slugify the file name without extension
      this.slug = slugify(path.parse(filepath).name)
    }

    // tag for json
    this.meta.tags = this.meta.tags.map((tag) => ({
      name: tag,
      slug: slugify(tag)
    }))
  }

  url (baseUrl) {
    return Url.resolve(baseUrl, this.slug)
  }

  lean (showContent = true) {
    let base = showContent ? {
      content: this.content
    } : {}
    return Object.assign(base, {
      updated: this.mtime,
      slug: this.slug
    }, this.meta)
  }

  static async fromFile (filepath) {
    let content = await fsp.readFile(filepath).then(c => c.toString())
    return new MarkedPost(content, filepath)
  }
}

module.exports = MarkedPost
