<template lang="html">
  <only-container>
    <div class="tags-container" v-if="tags">
      <span
        v-for="item in tags"
        class="tag"
        :class="{'active': tag === item.slug}"
        @click="fetchTag(item.slug)"
      > {{ item.name }} </span>
    </div>
    <hr>
    <only-blog
      v-for="post in posts"
      :post="post"
      :key="post.title"
    ></only-blog>
  </only-container>
</template>

<script>
import Container from '@/components/Container.vue'
import BlogItem from '@/components/BlogItem.vue'

import { mapGetters } from 'vuex'

export default {
  props: [ 'tag' ],
  components: {
    'only-container': Container,
    'only-blog': BlogItem
  },
  computed: {
    ...mapGetters([ 'posts', 'tags' ])
  },
  methods: {
    fetchTag (tagSlug) {
      this.$router.push({
        name: 'Tag',
        params: {
          tag: tagSlug
        }
      })
      this.$store.dispatch('fetchPostsByTag', {
        slug: tagSlug
      })
    }
  },
  created () {
    const p = this.tags.length ? Promise.resolve() : this.$store.dispatch('fetchTags')
    p.then(() => {
      if (!this.tag) {
        this.$router.push({
          name: 'Tag',
          params: {
            tag: this.tags[0].slug
          }
        })
      }
    }).then(() => {
      document.title = this.$config.title('Tags')
      return this.$store.dispatch('fetchPostsByTag', {
        slug: this.$route.params.tag
      })
    })
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/base.sass"
  .tags-container

    display: flex
    flex-wrap: wrap
    // justify-content: center

    .tag
      border: 1px solid $color-primary
      box-shadow: 0px 0px 0.2em $color-primary
      border-radius: 2em
      padding: 0 1em
      margin-top: 0.5em
      margin-right: 0.5em
      cursor: pointer

      transition: 0.2s ease
      display: inline-block

      &:last-child
        margin-right: 0

      &:hover, &.active
        border: 1px solid $color-highlight
        box-shadow: 0px 0px 0.2em $color-highlight

      &.active
        color: $color-highlight
</style>
