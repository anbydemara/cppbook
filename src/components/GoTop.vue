<template>
    <transition>
        <div @click="toTop" v-show="topShow" class="go-top"><img class="up-img" src="../assets/icon/gotop.svg" /></div>
    </transition>
</template>

<script>
export default {
    name: 'GoTop',
    data() {
        return {
            topShow: false  //初始不显示gotop组件
        }
    },
    methods: {
        toTop() {   //点击gotop回到顶部
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.topShow = false;   //回到顶部后隐藏gotop
        },
        needToTop() {   //检测是否需要显示gotop，该方法当滚动触发时调用
            let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
            if (curHeight > 400) {
                this.topShow = true;
            } else {
                this.topShow = false;
            }
        },
    },
    mounted() {
        this.$nextTick(function() {    //滚动触发needTop()
            window.addEventListener('scroll', this.needToTop);
        })
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.needToTop)
    }

}
</script>

<style>
    .go-top {
        background-color: #fff;
        position: fixed;
        right: 15.5%;
        bottom: 150px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
        transition: .3s;
        box-shadow: 0 0 6px rgba(0, 0, 0, .12);
        z-index: 5;
    }

    .go-top img {
        display: block;
        width: 24px;
        margin: 8px;
    }
</style>