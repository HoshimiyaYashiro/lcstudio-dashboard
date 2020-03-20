<template>
  <el-container class="page-container">
    <el-menu default-active="1" class="page-menu" :collapse="isCollapse">
      <li class="el-menu-toggle">
        <menu-icon
          v-show="isCollapse"
          size="1.7x"
          @click="isCollapse = false"
        ></menu-icon>
        <arrow-left-icon
          v-show="!isCollapse"
          size="1.7x"
          @click="isCollapse = true"
        ></arrow-left-icon>
        <span>Zafkiel</span>
      </li>
      <router-link to="/home/dashboard">
        <el-menu-item index="1">
          <i class="el-icon-odometer"></i>
          <span>Dashboard</span>
        </el-menu-item>
      </router-link>
      <router-link to="/home/report">
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span>Report</span>
        </el-menu-item>
      </router-link>
      <li class="el-menu-toggle el-menu-logout" @click="logout">
        <i class="el-icon-switch-button"></i>
        <span>Log Out</span>
      </li>
    </el-menu>
    <el-main>
      <div
        v-show="!isCollapse"
        class="page-mask"
        @click="isCollapse = true"
      ></div>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { MenuIcon, ArrowLeftIcon } from 'vue-feather-icons'
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  middleware: 'auth',
  components: { MenuIcon, ArrowLeftIcon },
  data() {
    return {
      isCollapse: true
    }
  },
  mounted() {
    this.$router.push('/home/dashboard')
  },
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
@import './assets/sass/style'
.page-container
  min-height: 100vh
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%)
  // background-image: url('../assets/img/bg.jpg')
.page-menu
  background: rgba(0, 0, 0, .2)
  border-color: transparent
  overflow-x: hidden
  &:not(.el-menu--collapse)
    width: 250px
.page-mask
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  background: rgba(255, 255, 255, .2)
.el-main
  position: relative
.el-menu-logout
  position: absolute
  bottom: 0
  left: 0
  width: 100%
  cursor: pointer
  background: transparent
  color: #c9c9c9
  border-top: solid 1px #fff
  &:hover
    color: #fff
    background: rgba(0, 0, 0, .2)
</style>
