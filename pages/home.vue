<template>
  <el-container class="page-container">
    <el-menu default-active="1" class="page-menu"></el-menu>
    <el-main></el-main>
  </el-container>
</template>

<script>
export default {
  components: {},
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout')
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>

<style lang="sass">
.page-container
  min-height: 100vh
  background-image: url('../assets/img/bg.jpg')
.page-menu
  width: 250px
</style>
