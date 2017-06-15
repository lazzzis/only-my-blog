<template lang="html">
  <only-container>
    <div class="article">
      <div class="content">
        <h1>404</h1>
        <blockquote>
          I got lost but look what I found.
          </br>&emsp;&emsp;-- Irving Berlin
        </blockquote>
        <img src="https://as.bitinn.net/upload/cj2l8o36f00ofbo5nj7spml66.1200.jpg" alt="">
        <p class="caption">Pixiv ID 48134921</p>
      </div>
    </div>
  </only-container>
</template>

<script>
import Container from '@/components/Container.vue'

export default {
  components: {
    'only-container': Container
  },
  created () {
    document.title = this.$config.title('404 Not Found')
  }
}
</script>

<style lang="sass">
</style>
