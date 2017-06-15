// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import config from '../config'

import FastClick from 'fastclick'

FastClick.attach(window.document.body)

Vue.config.productionTip = false

Vue.prototype.$config = config

Vue.filter('timePretty', function (date) {
  // date may be a string number
  const dat = isNaN(+date) ? new Date(date) : new Date(+date)
  const month = dat.getMonth() + 1 < 10
    ? `0${dat.getMonth() + 1}`
    : dat.getMonth() + 1
  const day = dat.getDate() < 10 ? `0${dat.getDate()}` : dat.getDate()
  return `${dat.getFullYear()} - ${month} - ${day}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
