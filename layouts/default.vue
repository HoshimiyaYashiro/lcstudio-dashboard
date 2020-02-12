<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');
html {
  font-family: 'Merriweather', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.el-input__inner {
  border-radius: 0;
  border-color: white;
}

.el-input__inner:hover {
  border-color: white;
}

.el-input__inner:focus {
  border-color: white;
}

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: inherit;
}

.c-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #2dcc70;
  border: 1px solid #2dcc70;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.5s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  font-family: inherit;
}

.c-button.wide {
  padding: 12px 60px;
}

.c-button:hover {
  background: transparent;
  border-color: #fff;
  color: #2dcc70;
}

.el-checkbox__inner {
  background-color: transparent;
  width: 18px;
  height: 18px;
  border: 2px solid #fff;
  border-radius: 0;
}

.el-checkbox__inner:hover {
  border-color: #fff;
}

.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: transparent;
  border-color: #fff;
}

.el-checkbox__inner::after {
  border: 2px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 8px;
  left: 4px;
  top: 1px;
  width: 4px;
}

.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #fff;
}
</style>
