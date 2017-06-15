<template lang="html">
  <only-container>
    <only-blog v-for="post in posts" :post="post" :key="post.title"></only-blog>
  </only-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Container from '@/components/Container.vue'
import BlogItem from '@/components/BlogItem.vue'

export default {
  components: {
    'only-container': Container,
    'only-blog': BlogItem
  },
  created () {
    this.$store.dispatch('fetchPosts')
      .then(() => {
        document.title = this.$config.title('Blogs')
      })
  },
  computed: {
    ...mapGetters([ 'posts' ])
  }
}
</script>

<style lang="css">
</style>
