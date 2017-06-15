import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '../../config'

Vue.use(Vuex)

axios.defaults.baseURL = config.baseUrl
// axios.defaults.withCredentials = true

const state = {
  posts: [], // a list shown on the /blogs or on the /tags/:tag
  article: {}, // an article show on /blogs/:slug
  links: {},
  about: {},
  tags: [],
  activeCnt: 0
}

const getters = {
  'posts' (state) {
    return state.posts
  },
  'article' (state) {
    return state.article
  },
  'links' (state) {
    return state.links
  },
  'about' (state) {
    return state.about
  },
  'tags' (state) {
    return state.tags
  },
  'activeCnt' (state) {
    return state.activeCnt
  }
}

const mutations = {
  'updatePageTitle' (state, {title}) {
    document.title = title
  },
  'updatePosts' (state, {posts}) {
    state.posts = posts
  },
  'updateArticle' (state, data) {
    state.article = data
  },
  'updateLinks' (state, data) {
    state.links = data
  },
  'updateAbout' (state, data) {
    state.about = data
  },
  'updateTags' (state, {tags}) {
    state.tags = tags
  },
  'activate' (state) {
    state.activeCnt += 1
  },
  'disactivate' (state) {
    state.activeCnt -= 1
  },
  'clearActive' (state) {
    state.activeCnt = 0
    state.posts = []
  }
}

const actions = {
  'fetchPosts' ({commit}) {
    // it seems that sometimes the cache could make requests outdated
    return axios.get(`/api/posts.json?version=${Date.now()}`)
      .then(({data}) => {
        commit('updatePosts', data)
      })
  },
  'fetchArticle' ({commit}, {slug}) {
    return axios.get(`/api/articles/${slug}.json?version=${Date.now()}`)
      .then(({data}) => {
        commit('updateArticle', data)
      })
      .catch(() => {
        commit('updateArticle', {
          title: `Can't find the expected article`,
          date: Date.now(),
          updated: Date.now()
        }) // can find the article
      })
  },
  'fetchLinks' ({commit}) {
    return axios.get(`/api/links/index.json?version=${Date.now()}`)
      .then(({data}) => {
        commit('updateLinks', data)
      })
  },
  'fetchAbout' ({commit}) {
    return axios.get(`/api/about/index.json?version=${Date.now()}`)
      .then(({data}) => {
        commit('updateAbout', data)
      })
  },
  'fetchTags' ({commit}) {
    return axios.get(`/api/tags.json?version=${Date.now()}`)
      .then(({data}) => {
        commit('updateTags', data)
      })
  },
  'fetchPostsByTag' ({commit}, {slug}) {
    return axios.get(`/api/tags/${slug}.json?version=${Date.now()}`)
      .then(({data}) => {
        commit('updatePosts', data)
      })
      .catch(() => {
        commit('updatePosts', []) // can't find the tag
      })
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
