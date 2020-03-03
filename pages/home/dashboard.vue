<template>
  <el-container class="page-main">
    <el-header>
      <el-col :span="6">
        <el-input v-model="searchText" placeholder="Search...">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="sass"></style>
