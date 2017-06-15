const yaml = require('js-yaml')
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
    let lines = this.fileContent.split('\n')
    let contentStart = 0
    for (let i = 0; i < lines.length; i += 1) {
      let line = lines[i].trim()
      if (line && !/[^-]/.test(line)) { // the divide line
        contentStart = i
        break
      }
    }

    let content = lines.slice(contentStart + 1).join('\n')

    let meta
    if (contentStart === 0) {
      meta = {}
    } else {
      let metaLines = lines.slice(0, contentStart)
      // if loading fails, meta will be {}
      meta = yaml.safeLoad(metaLines.join('\n')) || {}
    }

    // ensure they are arraies, rather than a single tag (string)
    if (meta.categories && typeof meta.categories === 'string') {
      meta.categories = [meta.categories]
    } else if (!meta.categories) { // no categories detected
      meta.categories = []
    }

    if (meta.tags && typeof meta.tags === 'string') {
      meta.tags = [meta.tags]
    } else if (!meta.tags) { // no categories detected
      meta.tags = []
    }
    return [meta, content]
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
