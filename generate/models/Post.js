const yaml = require('js-yaml')
const parser = require('hexo-front-matter')
const fsp = require('fs-promise')

class Post {
  constructor (fileContent = '') {
    this.fileContent = fileContent
    ;[this.meta, this.content] = this._parse()
  }

  get tags () {
    return this.meta.tags
  }

  get categories () {
    return this.meta.categories
  }

  get title () {
    return this.meta.title
  }

  get date () {
    return this.meta.date
  }

  _parse () {
    const parsed = parser.split(this.fileContent)
    const tryMeta = yaml.safeLoad(parsed.data)
    const meta = tryMeta === 'undefined' ? {} : tryMeta

    if (!meta.tags) {
      meta.tags = []
    } else if (typeof meta.tags === 'string') { // single element
      meta.tags = [meta.tags]
    }

    if (!meta.categories) {
      meta.categories = []
    } else if (typeof meta.categories === 'string') {
      meta.categories = [meta.categories]
    }

    return [ meta, parsed.content ] // meta, content
  }

  lean (showContent = true) {
    let base = showContent ? {
      content: this.content,
      updated: this.mtime
    } : {
      updated: this.mtime
    }
    return Object.assign(base, this.meta)
  }

  toJSON (showContent = true) {
    return JSON.stringify(this.lean(showContent))
  }

  async save (filepath) {
    await fsp.ensureFile(filepath)
    await fsp.writeFile(filepath, this.toJSON())
  }

}

module.exports = Post
