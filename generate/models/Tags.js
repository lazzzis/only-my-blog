const Tag = require('./Tag')

class Tags {
  constructor (posts = []) {
    // extract all tags from all posts
    this.tags = posts.reduce((acc, post) => {
      return acc.concat(post.tags)
    }, [])

    // remove duplicate tags
    const tables = {}
    for (let tag of this.tags) {
      if (! (tag.slug in tables)) {
        tables[tag.slug] = new Tag(tag.name)
      }
    }

    this.tags = Object.values(tables)

    // map tags to corresponded posts
    posts.forEach((post) => {
      // tag here is a string
      post.tags.forEach((tag) => tables[tag.slug].push(post))
    })

    // sort by the tag name
    this.tags.sort((t1, t2) => t1.name.localeCompare(t2.name))
  }

  get length () {
    return this.tags.length
  }

  * [Symbol.iterator] () {
    for (let tag of this.tags) {
      yield tag
    }
  }

  forEach (...args) {
    return Array.prototype.forEach.apply(this.tags, args)
  }

  map (...args) {
    return Array.prototype.map.apply(this.tags, args)
  }

  findByTag (tagName = '') {
    return this.tags.filter((tag) => tag.name === tagName)
  }

  lean () {
    return {
      // here return a object; use parenthesis to avoid syntax error
      tags: this.tags.map((tag) => ({
        name: tag.name,
        slug: tag.slug,
        length: tag.length
      }))
    }
  }

  toJSON () {
    return JSON.stringify(this.lean())
  }
}

module.exports = Tags
