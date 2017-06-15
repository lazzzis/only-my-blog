function slugify (content) {
  return content.replace(/\s/g, '-')
}

module.exports = {
  slugify
}
