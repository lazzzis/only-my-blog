<template lang="html">
  <div class="article animated slideInLeft">
    <h1 class="title">{{ article.title }}</h1>
    <hr class="splitline">
    <article
      class="content"
      v-html="article.content"
      >

    </article>
    <span class="time"> {{ article.date | timePretty }}
      / Updated on {{ article.updated | timePretty }}
     </span>
    <hr class="splitline">
    <only-disqus
      v-if="config"
      :config="config"
    ></only-disqus>
  </div>
</template>

<script>
import Disqus from './Disqus.vue'

export default {
  components: {
    'only-disqus': Disqus
  },
  props: [ 'article', 'config' ]
}
</script>

<style lang="sass">
  @import "../assets/sass/base.sass"
  .article
    .title
      margin-bottom: 0.5rem
    hr.splitline
      margin-top: 0
    .content
      h1, h2, h3, h4, h5, h6
        &::before
          content: '# '
          color: $color-primary

      img
        display: block
        margin: auto
        max-width: 75%
        min-width: 35%

      code
        overflow-wrap: break-word
        white-space: unset

      p.caption
        font-size: 0.8em
        color: $color-secondary
        display: flex
        justify-content: center
</style>
