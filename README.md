# only-my-blog

> source code of my only blog

# What is this?

This repo is the source code building my github pages (my blog).

[Preview](https://lazzzis.github.io)

This mainly contains two parts:

- Frontend
- Generator (Backend)

## Frontend

The development is based on vue workflow, which can build a SPA(single page application).

## Generator (Backend)

The generator can scan the target directory and transform all the markdown files to json files. The main content of a post will be compiled to html with [`marked`](https://github.com/chjj/marked), including highlightling code with [`highlight.js`](highlightjs.org), rendering math formulas with [`katex`](https://khan.github.io/KaTeX/) and so on.

For example, the structure of json representing a general article:

```json
{
    "title": "the title of the article/post",
    "content": "the content of the article (has been rendered to html)",
    "date": "the date when the post was first published",
    "slug": "the name shown in the url",
    "tags": [
        {
            "name": "the name of a tag",
            "slug": "the name shown in the url"
        }
    ],
    "updated": "the date when the post was last updated"
}
```

# Project structure

```
.
├── LICENSE
├── README.md
├── build // webpack config files
├── config
│   ├── dev.env.js
│   ├── index.js // config for the blog content
│   └── prod.env.js
├── dist // the project will be uploaded to the user's github pages repo
│   └── deploy.js // `npm run deploy` could automatically upload files to github repo
├── generate // the Generator (Backend) code
│   ├── app.js // `npm run gen` could transform markdown files to json files in "dist/api"
│   ├── models
│   ├── source // the markdown files
│   └── utils
├── index.html
├── package.json
├── src // the Frontend code
└── static
```
