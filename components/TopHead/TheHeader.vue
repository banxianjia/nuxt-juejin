<template>
  <div class="theHeader">
    <el-row align="middle" justify="start">
      <el-col :span="3"><div class="logo"></div></el-col>
      <el-col :span="9"><top-tab /></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from "element-plus";
const miniSrc = "favicon.png";
let state = reactive({
  logoSrc: "e08da34488b114bd4c665ba2fa520a31.svg",
});
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .logo {
    background-image: url("e08da34488b114bd4c665ba2fa520a31.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 60px;
  }
}
@media screen and (max-width: 600px) {
  .logo {
    background-image: url("miniLogo.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 60px;
  }
}

.theHeader {
  background: #fff;
  padding: 0 20px;
  height: 60px;
}
</style>