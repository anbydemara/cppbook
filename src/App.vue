<template>
  <div>
    <BaseHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import BaseHeader from '@/views/common/BaseHeader'

import Outline from "./components/Outline.vue";
import NoBuy from "./components/NoBuy.vue";
// import Global from './components/Global.vue'
import { outlineItems } from "./assets/outlineItems.js";
import { getReceiveStatus } from "./api/api.js";
import Cookies from 'js-cookie'

const TokenKey = 'qingline_token'


export default {
  components: {
    Outline,
    NoBuy,
    BaseHeader
  },

  data() {
    return {
      outlineItems: [],
      noBuy: false,
      train_course_auth: true,
    };
  },
  watch: {
    $route() {
      this.outlineItems = outlineItems[this.$route.path];
    },
  },
  methods: {
    getToken() {
      return Cookies.get(TokenKey)
    },
    // 检查是否购买教材
    checkReceiveStatus() {
      // 向API发出查询请求
      getReceiveStatus().then((res) => {
        console.log('train_course_auth',res.data.data.train_course_auth)
        this.train_course_auth = res.data.data.train_course_auth
        this.noBuy = !res.data.data.train_course_auth
      }).catch((err)=>{
        console.log(err)
      });
    },
  },
  created() {
    this.outlineItems = outlineItems[this.$route.path];
  },
  mounted() {
    let redirect = window.location.pathname + window.location.search;
    let token = this.getToken();
    console.log(token);
    // 如果没有qingline_token，跳转到登录页面
    // if(!token){
    //   redirect = encodeURIComponent(redirect);
    //   window.location.href = `https://www.qingline.net/login?redirect=${redirect}`;
    // }else{
    //   this.checkReceiveStatus();
    // }
  },
};
</script>


<style>
*{
	margin:0;
	padding:0;
	border:0
}

.appbox {
  overflow: hidden;
  height: 100vh;
}
.page-header {
  z-index: 1;
}
.page-body {
  align-items: stretch;
  display: flex;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  height: calc(100% - 60px);
  position: relative;
  flex: 1 0 auto;
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto;
  max-width: 100%;
}
.docs-nav {
  /* display: none; */
  border-right: 1px solid #ececf1;
  flex: 0 0 auto;
  overflow: auto;
  /* 这个地方改 */
  padding: 0px 10px 20px 0px;
  width: 250px;
  /* background-color: blue; */
}
/* @media screen and (max-width: 768px) {
  .docs-nav {
    display: none;
  }
} */
.docs-body {
  flex: 1 1 auto;
  height: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: auto;
  /* background-color: green; */
  padding: 50px;
}
</style>



<style>

@font-face {
  font-family: AliMedium;
  src: url('./assets/font/AlibabaPuHuiTi-2-65-Medium.ttf');
}

@font-face {
  font-family: AliHeavy;
  src: url('./assets/font/AlibabaPuHuiTi-2-105-Heavy.ttf');
}

.content {
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
}
h1 {
  font-size: 2rem !important;
  /* margin-top: 15px !important; */
  font-family: AliMedium;
}

h2 {
  font-size: 1.5rem !important;
  font-family: AliMedium;
  margin-bottom: 10px;

  margin-top: 15px !important;
}
h3 {
  font-size: 1.2rem !important;
  margin-top: 15px !important;
}
pre {
  padding: 9.5px;
  padding-bottom: 0;
  /* background-color: #f5f5f5; */
  font-family: AliMedium;
  margin-bottom: 20px;
}

code {
  font-size: 14px;
  line-height: 25px;
}

.ne-p,
p,
.ne-text {
  line-height: 1.74;
}

/* quote start */
.ne-quote {
  margin: 0;
  padding: 10px;
  border-left: 4px solid #0062F2;
  background-color: #e8e6e6;
  color: #444444;
  margin-top: 10px;
  margin-bottom: 20px;
  overflow: hidden;
}
.ne-quote p {
  text-indent: 0 !important;
}
/* quote end */
.ne-code {
  display: inline-block;
  color: rgb(38, 38, 38);
  font-family: "Consolas", monospace;
  font-weight: 600;
  padding: 2px 4px;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  font-size: 15px;
  text-indent: 0;
}
p {
  text-indent: 2em;
}
table .ne-p,
p,
.ne-text {
  text-indent: 0;
  line-height: 1.3em;
}
table .ne-p {
  text-indent: 0;
  margin-bottom: 0;
}

/* list start */
.ne-ul {
  margin-top: 5px;
}

.ne-ul > li {
  font-family: 'AliMedium';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  list-style-position:inside
}
/* list end */

/* table start */
.ne-table {
  width: 100%;
  border: 2px solid;
  border-right: none;
  border-bottom: none;
  border-collapse: collapse;
  border-spacing: 0;
  /* margin-top: 10px; */
  margin: 10px auto;
}

.table-70 {
  width: 70%;
}

.table-header {
  background-color: #0062F2;
  height: 33px;
}

.table-header span {
  color: #FFFFFF;
}

.ne-table td {
  border-bottom: 2px solid;
  border-right: 2px solid;
}

td {
  vertical-align: top;
}

.ne-table p {
  /* not found origin style */
  text-indent: 10px !important;
}
/* table end */
.ne-ol {
  list-style-position : inside;
}
.ne-link {
  overflow: hidden;
}
</style>


<style>
/* For Components --> Ch1... */
    .whole-page {
        width: 100%;
        display: flex;
    }

    .self-outline {
        width: 15%;
        background: #E5E5E5;
        position: fixed;
        height: calc(100% - 64px);
        right: 0;
        overflow-y: auto;
    }
    .self-outline::-webkit-scrollbar {
        width: 8px;
    }
    .self-outline::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 5px;
    }

    .outline-title {
        padding: 20px 20px 5px;
        font-family: 'AliMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #333333;
    }

    .self-main {
        border: solid 1px #cccccc;
        border-top: none;
        border-bottom: none;
        padding: 3% 2%;
        background: #E5E5E5;
        overflow-x: hidden;
    }

    .self-section {
        padding: 40px 40px;
        margin-top: 30px;
        background: #FFFFFF;
        border-radius: 32px;
    }

    .self-section > h1 {
        font-family: 'AliMedium';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 28px;
        color: #131313;
    }

    .self-nav > li{
        list-style-type: none;
        font-family: 'AliMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 38px;
        height: 38px;
        /* identical to box height, or 100% */
        margin-top: 5px;
        cursor: pointer;
        overflow: hidden;
        color: #666666;
    }

    .self-nav > li:hover {
        background: rgba(0, 98, 242, 0.1);
        border-radius: 8px;

    }

    table {
        border-collapse: collapse !important;
    }

    .activeOutline div {
        color: #0062F2;
    }
    .activeOutline::before {
        content: "";
        width: 3px;
        height: 14px;
        position: absolute;
        margin-top: 12px;
        background: #0062F2;
    }

    .chapter-title {
        font-family: 'Alibaba PuHuiTi 2.0';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 32px;
        color: #131313;
    }

    p {
        font-family: 'AliMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        /* or 175% */

        text-align: justify;
        text-indent: 32px;

        color: #333333;
    }

    .img-70 {
        display: block; 
        width: 70%;
        margin: 10px auto;
        max-width: 700px;
        min-width: 320px;
    }
    .img-60 {
        display: block; width: 60%;margin: 10px auto;
        min-width: 320px;
    }
    .img-50 {
        display: block; width: 50%;margin: 10px auto;
        min-width: 320px;
    }

    a:link {color: #0062F2;} 
    a:visited {color: #0062F2;} 
    a:hover {color: #0062F2;}
    a:active {color: #0062F2;} 
</style>


<style>
/* For Component --> Contents and Ppt */
a {
  text-decoration: none;
}

.self-box {
    /* margin-top:20px; */
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column;
    align-items: flex-start; */
    /* padding: 0px; */
    gap: 40px;
    /* background: #fff; */
    /* width: 850px; */
    /* margin: auto; */
}
.self-col {
    display: inline-block;
    box-sizing: border-box;
    /* flex-direction: column; */
    /* align-items: flex-start; */
    /* gap:10px; */
    /* padding: 0px; */
    border: 0.5px solid #cccccc;
    border-radius: 12px;
    width: 250px;
    height: 210px;
    margin: auto;
}

.self-col img{
    border-bottom: 0.5px solid #CCCCCC;
    width: 250px;
    height: 160px;
}

.self-col .con {
    font-family: "AliMedium";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #0062f2;
    height: 16px;
    display: flex;
    flex-grow: 1;
    margin: 10px;
}
</style>

