<template>
  <el-container class="page-container">
    <el-menu default-active="1" class="page-menu" :collapse="isCollapse">
      <li class="el-menu-togger">
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
      <button @click="logout">Log Out</button>
    </el-menu>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { MenuIcon, ArrowLeftIcon } from 'vue-feather-icons'

export default {
  middleware: 'auth',
  components: { MenuIcon, ArrowLeftIcon },
  data() {
    return {
      isCollapse: true
    }
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
.page-container
  min-height: 100vh
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%)
  // background-image: url('../assets/img/bg.jpg')
.page-menu
  background: rgba(0, 0, 0, .2)
  border-color: transparent
  overflow-x: hidden
.page-menu:not(.el-menu--collapse)
  width: 250px
</style>
