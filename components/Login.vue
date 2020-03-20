<template>
  <el-row class="login-container" type="flex" justify="center">
    <el-col :xs="24" :sm="20" :md="16" :lg="8" :xl="6" class="login-form">
      <h3>LOGIN</h3>
      <el-form ref="form" :model="user" @submit.prevent.native="authLogin">
        <el-form-item label="User Name">
          <el-input v-model="user.userName"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="user.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox
            v-model="user.isRemember"
            label="Remember Me?"
            name="remember"
          ></el-checkbox>
        </el-form-item>
        <el-form-item class="text-center">
          <button type="submit" class="c-button wide">
            Login
          </button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {
        userName: '',
        password: '',
        isRemember: false
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', this.user)
        this.$router.push('/home')
      } catch (e) {
        console.log(e)
      }
    },
    async authLogin() {
      const self = this
      try {
        await this.$auth.loginWith('local', { data: self.user })
      } catch (err) {
        console.log(err)
      }
      if (self.$auth.loggedIn) {
        self.$router.push('/home')
      }
    }
  }
}
</script>

<style lang="sass">
.login-container
  width: 100%
.login-form
  background: rgba(0, 0, 0, 0.45)
  color: white
  padding: 1.25rem
  h3
    text-align: center
  .el-form
    margin-top: 1rem
  label
    color: white
</style>
