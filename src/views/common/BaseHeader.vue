<template>
    <div class="self-header">
        <div style="float: left">
            <a v-if="logoShow || isHome" href="http://upcxai.top/"><img src="../../assets/logo/logo.png" style="width: 50px;height: 40px;margin: 12px;"/></a>
            <div v-else @click="menuTrigger" class="head-menu"><img src="../../assets/icon/head-menu.svg"/></div>
        </div>
        <img class="title" src="../../assets/ui/title.svg" />
        <zsdtbtn v-show="zsdtShow" class="zsdtbtn"></zsdtbtn>
    </div>
</template>

<script>
import zsdtbtn from '@/components/zsdt-btn.vue'
export default {
    name: 'BaseHeader',
    components: {zsdtbtn},
    data() {
        return {
            logoShow: true,
            menuFloat: false,
            zsdtShow: true,
            isHome: this.$store.state.isHome
        }
    },
    watch: {
        "$store.state.logoShow":{    
            handler:function(newVal,oldVal){
                this.logoShow = newVal
            }
        },
        "$store.state.menuFloat":{
            handler:function(newVal,oldVal){
                this.menuFloat = newVal
            }
        },
        "$store.state.zsdtShow":{
            handler:function(newVal,oldVal){
                this.zsdtShow = newVal
            }
        },
        "$store.state.isHome":{
            handler:function(newVal,oldVal){
                this.isHome = newVal
            }
        }
    },
    methods: {
        menuTrigger() {
            this.menuFloat = !this.menuFloat;
            this.$store.dispatch("floatMenu", this.menuFloat)
        }
    }
}
</script>

<style scoped>
    .head-menu {
        width: 64px;
        height: 64px;
        cursor: pointer;
    }
    .head-menu img {
        height: 24px;
        margin: 20px;
    }

    .self-header {
        position: fixed;
        z-index: 1024;
        min-width: 100%;
        top: 0;
        left: 0;
        /* width: 100%; */
        /* display: block; */
        height: 64px;
        color: #fff;
        background: #FFFFFF;
        border-bottom: 0.5px solid #EAEAEA;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.01);
    }

    .title {
        float: left;
        /* position: absolute; */
        width: 268px;
        height: 24px;
        margin-top: calc((64px - 24px) / 2);
        /* left: 114px; */
    }
    .zsdtbtn {
        position: absolute;
        top: calc((64px - 40px) / 2);
        right: 50px;
        }
</style>