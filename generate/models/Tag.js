const fsp = require('fs-promise')
const slugify = require('../utils').slugify

class Tag {
  constructor (name = '') {
    this.name = name
    this.posts = []
    this.slug = slugify(name)
  }

  get length () {
    return this.posts.length
  }

  push (post) {
    this.posts.push(post)
  }

  lean () {
    return {
      name: this.name,
      // do not show contents of each post
      posts: this.posts.map((post) => post.lean(false)),
      slug: this.slug
    }
  }

  toJSON () {
    return JSON.stringify(this.lean())
  }

  async save (filepath) {
    await fsp.ensureFile(filepath)
    await fsp.writeFile(filepath, this.toJSON())
  }
}

module.exports = Tag
