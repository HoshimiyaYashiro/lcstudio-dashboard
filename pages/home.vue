<template>
  <el-container>
    <button class="c-button wide" @click="logout">Log Out</button>
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
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="sass"></style>
