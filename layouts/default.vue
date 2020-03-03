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

.el-menu-item {
  color: #c9c9c9;
}

.el-menu-item i {
  color: #c9c9c9;
  height: 60px;
  line-height: 60px;
}

.el-menu-item:focus,
.el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.el-menu-item:focus::before,
.el-menu-item:hover::before {
  content: '';
  display: block;
  position: absolute;
  height: 100%;
  width: 5px;
  top: 0;
  left: 0;
  background: #fff;
}

.el-menu-item.is-active {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
}

.el-menu-item.is-active::before {
  content: '';
  display: block;
  position: absolute;
  height: 100%;
  width: 5px;
  top: 0;
  left: 0;
  background: #1fa2ff;
}

.el-menu-item [class^='el-icon-'] {
  font-size: 24px;
  margin-right: 20px;
}

.el-menu-toggle {
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  transition: 'border-color .3s', 'background-color .3s', 'color .3s';
  box-sizing: border-box;
  height: 60px;
  line-height: 60px;
  position: relative;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
  background: #fff;
}

.el-menu-toggle svg {
  display: inline;
  margin-right: 20px;
  cursor: pointer;
}

.el-menu--collapse > .el-menu-item span {
  visibility: visible;
  height: inherit;
  width: inherit;
}

.el-menu--collapse > .el-menu-item [class^='el-icon-'] {
  margin-right: 20px;
}

.el-menu-toggle [class^='el-icon-'] {
  width: 24px;
  text-align: center;
  vertical-align: middle;
  font-size: 24px;
  margin-right: 20px;
}

.el-main {
  padding: 0;
}

.page-main {
  height: 100%;
}
</style>
