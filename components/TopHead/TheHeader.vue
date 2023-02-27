<template>
  <div class="theHeader">
    <el-row ><img :src="state.logoSrc" alt="稀土掘金" /> <top-tab /></el-row>
  </div>
</template>

<script setup lang="ts">
import { ElRow } from "element-plus";
import TopTab from "./TopTab.vue";
const miniSrc = "favicon.png";
let state = reactive({
  logoSrc: "e08da34488b114bd4c665ba2fa520a31.svg",
});
</script>

<style scoped>
.theHeader {
  background: #fff;
  padding: 0 10px;
  height: 100px;
}
</style>