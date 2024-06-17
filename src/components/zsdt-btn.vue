<template>
    <button class="zsdt" @click="toZsdt">
      <img src="../assets/ui/Vector.svg" class="vector" /><span class="text">知识地图</span>
    </button>
</template>

<script>
export default {
  methods: {
    toZsdt() {
      this.$router.push("/zsdt")
    }
  }
}
</script>
  
<style scoped>
    .zsdt {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
  
      width: 117px;
      height: 40px;
  
      border-radius: 40px;
      background-color:#ffffff;
  
      /* 添加过渡效果 */
      transition: background-color 0.2s;

      cursor: pointer;
    }
  
    /* 当鼠标悬浮在.zsdt上时，设置背景色为蓝色 */
    .zsdt:hover {
      background-color: blue;
    }
  
    /* 当鼠标悬浮在.zsdt上时，设置子元素.text的字体颜色为白色 */
    .zsdt:hover .text {
      color: #ffffff;
    }
  
    /* 当鼠标悬浮在.zsdt上时，设置子元素.vector的过滤器为白色 */
    .zsdt:hover .vector {
      filter: brightness(100%);
    }
  
    .text {
      font-family: "Alibaba PuHuiTi 2.0";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      flex-grow: 1;
    }
  
    /* 默认情况下，设置子元素.vector的过滤器为灰色 */
    .vector {
      filter: brightness(0%);
    }
  </style>
  