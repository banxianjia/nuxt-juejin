<template>
  <div class="myMenu">
    <!-- rowMenu -->
    <el-menu
      id="rowMenu"
      mode="horizontal"
      :default-active="state.currentPage"
      :ellipsis="false"
      width="400"
    >
      <el-menu-item
        v-for="(item, index) in state.toptabs.data"
        :key="index"
        :index="item.attributes.name"
        @click="($event) => elItemHandle($event)"
      >
        {{ item.attributes.name }}
        <span class="redTab" v-if="item.attributes.hasRed">{{
          item.attributes.redtab
        }}</span>
      </el-menu-item>
    </el-menu>
    <!-- colMenu -->
    <div id="colMenuDiv">
      <text style="color: #409eff">{{ state.currentPage }}</text>

      <span style="margin-left: 5px" @click="($event) => handleColMenu($event)">
        <el-icon :size="12">
          <ArrowUpBold v-if="state.showAllCol" />
          <ArrowDownBold v-else />
        </el-icon>
        <el-menu id="colMenu" v-if="state.showAllCol">
          <el-menu-item
            v-for="(item, index) in state.toptabs.data"
            :key="index"
            :index="item.attributes.name"
            @click="($event) => elItemHandle($event)"
          >
            {{ item.attributes.name }}
          </el-menu-item>
        </el-menu>
      </span>
    </div>
  </div>
</template>


<script setup lang='ts'>
import { ElMenu, ElMenuItem, ElIcon } from "element-plus";
import { ArrowDownBold, ArrowUpBold } from "@element-plus/icons-vue";

let state = reactive({
  toptabs: {},
  currentPage: "首页",
  showAllCol: false,
});

const { data: toptabs } = await useFetch("http://localhost:1337/api/toptabs");
state.toptabs = toptabs;

function elItemHandle(e) {
  state.currentPage = e.index;
}
function handleColMenu(e) {
  state.showAllCol = !state.showAllCol;
}
</script>


<style scoped>
.myMenu {
  width: 680px;
}
.el-menu-item.is-active {
  background-color: rgb(255, 255, 255);
  border-bottom: 2px solid #ffffff;
}
.el-menu-item {
  position: relative;
}
.redTab {
  position: absolute;
  top: 8px;
  right: -10px;
  color: white;
  font-size: 5px;
  scale: 0.6;
  background-color: red;
  height: 15px;
  line-height: 15px;
  border-radius: 10px;
  padding: 0 5px;
}
@media screen and (min-width: 1000px) {
  #colMenuDiv {
    display: none;
  }
}
@media screen and (max-width: 1000px) {
  #rowMenu {
    display: none;
  }
}
#colMenuDiv {
  position: relative;
  margin-left: 10px;
  width: 70px;
}
#colMenu {
  position: absolute;
  top: 20px;
  left: -20px;
}
</style>