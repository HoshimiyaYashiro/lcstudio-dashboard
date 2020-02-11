<template>
  <el-row class="login-container" type="flex" justify="center">
    <el-col :xs="24" :sm="20" :md="16" :lg="8" :xl="6" class="login-form">
      <h3>LOGIN</h3>
      <el-form>
        <el-form-item label="Account">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox label="Remember Me?" name="remember"></el-checkbox>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="sass">
.login-container
  width: 100%
.login-form
  background: rgba(0, 0, 0, 0.45)
  height: 500px
  color: white
  padding: 1.25rem
  h3
    text-align: center
  .el-form
    margin-top: 1rem
  label
    color: white
</style>
