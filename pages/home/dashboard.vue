<template>
  <el-container class="page-main">
    <el-header>
      <el-row type="flex" align="middle" style="height: 100%">
        <el-col :span="6">
          <el-input v-model="searchText" placeholder="Search...">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col :span="12"></el-col>
        <el-col :span="6">
          <div class="user-management flex items-center justify-end">
            <el-avatar shape="square" :size="40" :src="userAvatar"></el-avatar>
            <el-dropdown>
              <span class="el-dropdown-link">
                {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Change Password</el-dropdown-item>
                <el-dropdown-item>Manage Information</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<script>
const avatar = require('../../assets/img/avatar.jpg')
export default {
  components: {},
  data() {
    return {
      searchText: '',
      userAvatar: avatar,
      userName: 'Kiana Kaslana'
    }
  }
}
</script>

<style lang="sass">
@import "./assets/sass/dashboard/dashboard"
</style>
