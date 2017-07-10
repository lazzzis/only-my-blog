const marked = require('marked')
const highlight = require('highlight.js')
const katex = require('katex')
const renderer = new marked.Renderer()

// Do some changes here to set some options to the rendering behaviodr
// https://github.com/chjj/marked

marked.setOptions({
  highlight: function (code, lang) {
    if (lang === 'katex') {
      return katex.renderToString(code)
    } else {
      return highlight.highlightAuto(code).value
    }
  }
})

renderer.image = function (href, title, text) {
  return `<div>
    <img src="${href}" class="zoomable"/>
    <p class="caption">${text}</p>
  </div>`
}

renderer.link = function (href, title, text) {
  return `<a href="${href}" target="_blank">${text}</a>`
}

renderer.codespan = function (code) {
  if (code.startsWith(':katex')) {
    return katex.renderToString(code.slice(':katex'.length))
  } else {
    return `<code>${code}</code>`
  }
}

module.exports = (content) => {
  return marked(content, {
    renderer,
    gfm: true,
    breaks: false
  })
}
