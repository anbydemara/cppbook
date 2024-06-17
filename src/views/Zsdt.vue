<template>
  <div class="container" >
    <div  class="box" id="observablehq-viewof-chart-8dfa3deb"></div>
    <div class="box"  id="observablehq-chartContainer-8dfa3deb"></div>
  </div>
</template>

<style scoped>
/* 将div的宽度和高度设置为100% */

.container {
  position: relative;
  /* 设置相对定位 */
}
.box {
  position: absolute;
  /* 设置绝对定位 */
  left: 30vw;
  top: 60vh;

  /* 使用transform进行居中 */
}
.box:first-child {
  /* 第一个div */
  transform: translate(-50%, -50%);
  /* background-color: #f00;*/
  width: 930px;
  height: 930px;
}
.box:last-child {
  /* 第二个div */
  transform: translate(-50%, -80%);
  /* background-color: #0f0;*/
  width: 400px;
  height: 400px;
  
}
</style>

<script>
import "../assets/zsdt/inspector.css";
import { Runtime, Inspector } from "../assets/zsdt/runtime.js";
import define from "../assets/zsdt/knowledge_map@1400.js";

export default {
  name: 'Zsdt',
  mounted() {
    this.$store.dispatch('toChapter', 3);
    new Runtime().module(define, (name) => {
      if (name === "chartContainer")
        return new Inspector(
          document.querySelector("#observablehq-chartContainer-8dfa3deb")
        );
      if (name === "viewof chart")
        return new Inspector(
          document.querySelector("#observablehq-viewof-chart-8dfa3deb")
        );
      return ["chart3", "data3"].includes(name);
    });
  },
};
</script>




