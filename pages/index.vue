<template>
  <div class="flex-container">
    <login></login>
  </div>
</template>

<script>
import Login from '../components/Login'
export default {
  components: { Login },
  mounted() {
    this.checkAuth()
  },
  methods: {
    checkAuth() {
      if (this.$store.state.authUser) {
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style lang="sass">
.flex-container
  min-height: 100vh
  margin: 0 auto
  display: flex
  justify-content: center
  align-items: center
  background-image: url('../assets/img/bg.jpg')
</style>
