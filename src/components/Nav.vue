<template lang="html">
  <div class="nav-container" @click="toggleBar">
    <transition
      enter-active-class="animated slideInLeft fadeIn"
      leave-active-class="animated slideOutLeft fadeOut"
    >
      <div class="nav" v-if="active">
        <router-link
          :to="{name: 'Blogs'}"
          class="item"
          @click.native.stop="toggleBar"
          >Blogs</router-link>
        <router-link
          :to="{name: 'Tags'}"
          class="item"
          @click.native.stop="toggleBar"
          >Tags</router-link>
        <router-link
          :to="{name: 'Links'}"
          class="item"
          @click.native.stop="toggleBar"
          >Links</router-link>
        <router-link
          :to="{name: 'About'}"
          class="item"
          @click.native.stop="toggleBar"
          >About</router-link>
        <a class="item" @click.stop="toggleBar">
          <i class="icon ion-chevron-left"></i>
        </a>
      </div>
      <!-- This key plays an important role. Since without it, toggleBar will be tringered twice
    , it seems that vue does not seem them as different ones -->
      <div v-else class="entry" @click.stop="toggleBar" key="entry">
        <i class="icon ion-chevron-right"></i>
      </div>
    </transition>
  </div>
</template>

<script>
// This sidebar is inspired by http://neshawoolery.com/blog/7-tips-for-a-beautiful-sidebar
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleBar ($e) {
      this.active = !this.active
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/base.sass"
  .nav-container
    position: fixed
    z-index: 100

    .entry
      background-color: transparentize($color-secondary, 0.7)
      margin-top: 1em
      font-size: 3rem
      width: 4rem
      height: 4rem
      // width: 2.5em
      // height: 2.5em
      transition: 0.4s ease
      display: flex
      justify-content: center
      align-items: center
      top: 0
      left: 0
      position: fixed
      z-index: -1

      transition: 0.4s ease

      &:hover, &.active
        background-color: $color-secondary
        color: white

      &.active:hover
        color: $color-highlight

    .nav
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      display: flex
      background-color: rgba(0, 0, 0, 0.8)
      width: 100vw
      height: 100vh
      .item
        font-size: 4rem
        font-family: $cursive-font
        cursor: pointer
        padding-left: 1em
        padding-right: 1em
        @media only screen and (max-height: 400px)
          font-size: 3rem
        color: transparentize(white, 0.2)

        &:hover
          color: white
          text-shadow: 0 0 2px #fff
</style>
