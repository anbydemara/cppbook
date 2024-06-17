<template>
  <div class="container">
    <div class="wrapper">
      <div class="neirong">
        <hometab></hometab>
        <contents></contents>
      </div>
    </div>
  </div>
</template>
  
  <script>
import hometab from "../components/home-tab.vue"
import contents from "../components/contents.vue"
export default {
  components: {
    hometab,
    contents
  },
  created() {
    this.$store.dispatch("nowHome", true)
  },
  mounted() {
    this.sizeInit();
    window.addEventListener('resize', this.sizeInit);
  },
  beforeDestroy() {
    this.$store.dispatch("nowHome", false);
    window.removeEventListener("resize", this.sizeInit)
  },
  methods: {
    sizeInit() {
        let width = document.body.clientWidth;
        if (width < 800) {
            this.$store.dispatch("showZsdt", false);
        } else {
            this.$store.dispatch("showZsdt", true);
        }
    },
  }
};
</script>
  
  <style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.title {
  position: absolute;
  width: 268px;
  height: 24px;
  left: 360px;
  top: calc((64px - 24px) / 2);
  left: 50px;
}

.zsdtbtn {
  position: absolute;
  top: calc((64px - 40px) / 2);
  right: 50px;
}

.wrapper {
  flex-grow: 1;
  padding: 20px 0 0 0;
  background-image: url("../assets/ui/bg.png");
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.tab {
  font-family: "Alibaba PuHuiTi 2.0";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */
  color: #131313;
}

.neirong {
    padding: 40px 48px;
  margin-top: 70px;
  /* width: 800px; */
  width: 60%;
  min-width: 400px;
  background: #ffffff;
  border-radius: 24px 24px 0px 0px;
}
</style>
  