<template>
  <div class="outline">
    <h3>大纲</h3>
    <ul>
      <li v-for="(item, index) in this.outlineItems" :key="index">
        <a :href="item.href" :class="{ active: item.active }">{{
          item.title
        }}</a>
        <ul v-if="item.children">
          <li v-for="(child, index) in item.children" :key="index">
            <a :href="child.href" :class="{ active: child.active }">{{
              child.title
            }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
  
  <script>
import { outlineItems } from "../assets/outlineItems.js";

export default {
  data() {
    return {
      outlineItems: [],
      activeItem: null,
    };
  },
  computed: {},
  watch: {
    $route() {
      this.outlineItems = outlineItems[this.$route.path];
    },
  },
  created() {
    this.outlineItems = outlineItems[this.$route.path];
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    // window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // console.log('scroll')
      const scrollY = window.scrollY;
      const outlineItems = this.outlineItems;
      let activeItem = null;

      // for (let i = outlineItems.length - 1; i >= 0; i--) {
      for (let i = 1; i < outlineItems.length; i++) {
        const item = outlineItems[i];
        // const elem = document.getElementById(item.href.replace("#", ""));
        const elem = this.$refs[item.href]
        console.log(elem)
        if (elem.offsetTop <= scrollY + 200) {
          activeItem = item;
          break;
        }
      }
      // console.log("ac,this.ac", activeItem, this.activeItem);
      if (activeItem !== this.activeItem) {
        console.log("aaa");
        this.activeItem = activeItem;
        this.updateActiveItem();
      }
    },
    updateActiveItem() {
      const outlineItems = this.outlineItems;
      outlineItems.forEach((item) => {
        if (item.children) {
          item.children.forEach((child) => {
            if (child === this.activeItem) {
              this.$set(child, "active", true);
            } else {
              this.$set(child, "active", false);
            }
          });
        }
        if (item === this.activeItem) {
          this.$set(item, "active", true);
        } else {
          this.$set(item, "active", false);
        }
      });
    },
  },
};
</script>
  
<style scoped>
.outline {
  /* margin-top:70px; */
  /* position: fixed; */
  /* top: 50px; */
  /* left: 0; */
  /* width: 250px; */
  /* height: 90%; */
  /* background-color: #f7f7f7; */
  /* border-right: 1px solid #ddd; */
  font-size: 14px;
  /* overflow-y: scroll; */
}

.outline ul {
  list-style: none;
  padding-left: 15px;
}

.outline a {
  display: block;
  padding: 5px 10px;
  color: #666;
  text-decoration: none;
}

.outline a:hover {
  background-color: #e6e6e6;
  color: #333;
}

.active {
  background-color: #e6e6e6;
  color: #333;
}

.outline li ul {
  margin-top: 5px;
  margin-bottom: 5px;
}

.outline h3 {
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>


  