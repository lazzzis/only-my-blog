<template lang="html">
  <only-container>
    <only-loading
      :loading="loading"
    >
      <only-article
        :article="article"
        :config="config"
      >
      </only-article>
    </only-loading>
  </only-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleItem from '@/components/ArticleItem.vue'
import Container from '@/components/Container.vue'
import Loading from '@/components/Loading.vue'

export default {
  props: [ 'slug' ],
  components: {
    'only-article': ArticleItem,
    'only-container': Container,
    'only-loading': Loading
  },
  data () {
    return {
      loading: true,
      config: null
    }
  },
  created () {
    this.$store.dispatch('fetchArticle', {
      slug: this.slug
    }).then(() => {
      document.title = this.$config.title(this.article.title)
      this.loading = false
      this.config = {
        title: document.title,
        identifier: `https://lazzzis.github.io/blogs/${this.article.slug}/`,
        url: `https://lazzzis.github.io/blogs/${this.article.slug}/`
      }
    })
  },
  computed: {
    ...mapGetters([ 'article' ])
  }
}
</script>

<style lang="css">
</style>
