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
  data () {
    return {
      config: null,
      loading: true
    }
  },
  components: {
    'only-article': ArticleItem,
    'only-container': Container,
    'only-loading': Loading
  },
  computed: {
    ...mapGetters({
      article: 'links'
    })
  },
  created () {
    this.$store.dispatch('fetchLinks')
      .then(() => {
        document.title = this.$config.title('Linkss')
        this.loading = false
        this.config = {
          title: document.title,
          identifier: 'https://lazzzis.github.io/links/',
          url: 'https://lazzzis.github.io/links/'
        }
      })
  }
}
</script>

<style lang="css">
</style>
