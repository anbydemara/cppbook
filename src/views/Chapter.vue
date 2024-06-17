<template>
    <div class="chapter-page" >
        <!-- menu -->
        <transition name="menuFade">
            <div v-show="menuShow || menuFloat" class="self-menu" ref="menuBox">
                <router-link to="/"><div class="menu-title"><img src="../assets/icon/home.svg"/><span>首页</span></div></router-link>
                <div @click="foldMenu" class="menu-title"><img src="../assets/icon/menu.svg"/>
                    <span>目录</span>
                    <img v-if="up" src="../assets/icon/up.svg" />
                    <img v-else src="../assets/icon/down.svg" />
                </div>
                <Collapse>
                    <ul class="menu-nav" v-show="expanded">
                        <li @click="setActiveIndex(1)" :class="activeIndex == 1 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 1" src="../assets/icon/Frame.png" />
                                <img v-else src="../assets/icon/Frame-1.png" />
                            </span>
                            <span class="icon-title">《C/C++简明双链教程》课件</span>
                        </li>
                        <li @click="setActiveIndex(2)" :class="activeIndex == 2 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 2" src="../assets/icon/Frame-2.png" />
                                <img v-else src="../assets/icon/Frame-3.png" />
                            </span>
                            <span class="icon-title">前言</span>
                        </li>
                        <li @click="setActiveIndex(3)" :class="activeIndex == 3 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 3" src="../assets/icon/Frame-4.png" />
                                <img v-else src="../assets/icon/Frame-5.png" />
                            </span>
                            <span class="icon-title">知识地图</span>
                        </li>
                        <li @click="setActiveIndex(4)" :class="activeIndex == 4 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 4" src="../assets/icon/Frame-6.png" />
                                <img v-else src="../assets/icon/Frame-7.png" />
                            </span>
                            <span class="icon-title">第一章—学习准备</span>
                        </li>
                        <li @click="setActiveIndex(5)" :class="activeIndex == 5 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 5" src="../assets/icon/Frame-8.png" />
                                <img v-else src="../assets/icon/Frame-9.png" />
                            </span>
                            <span class="icon-title">第二章—程序设计基础</span>
                        </li>
                        <li @click="setActiveIndex(6)" :class="activeIndex == 6 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 6" src="../assets/icon/Frame-10.png" />
                                <img v-else src="../assets/icon/Frame-11.png" />
                            </span>
                            <span class="icon-title">第三章—分支与函数初步</span>
                        </li>
                        <li @click="setActiveIndex(7)" :class="activeIndex == 7 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 7" src="../assets/icon/Frame-12.png" />
                                <img v-else src="../assets/icon/Frame-13.png" />
                            </span>
                            <span class="icon-title">第四章—循环</span>
                        </li>
                        <li @click="setActiveIndex(8)" :class="activeIndex == 8 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 8" src="../assets/icon/Frame-14.png" />
                                <img v-else src="../assets/icon/Frame-15.png" />
                            </span>
                            <span class="icon-title">第五章—数组与字符串</span>
                        </li>
                        <li @click="setActiveIndex(9)" :class="activeIndex == 9 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 9" src="../assets/icon/Frame-16.png" />
                                <img v-else src="../assets/icon/Frame-17.png" />
                            </span>
                            <span class="icon-title">第六章—指针</span>
                        </li>
                        <li @click="setActiveIndex(10)" :class="activeIndex == 10 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 10" src="../assets/icon/Frame-18.png" />
                                <img v-else src="../assets/icon/Frame-19.png" />
                            </span>
                            <span class="icon-title">第七章—面向对象</span>
                        </li>
                        <li @click="setActiveIndex(11)" :class="activeIndex == 11 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 11" src="../assets/icon/Frame-20.png" />
                                <img v-else src="../assets/icon/Frame-21.png" />
                            </span>
                            <span class="icon-title">第八章—模板和容器</span>
                        </li>
                        <li @click="setActiveIndex(12)" :class="activeIndex == 12 ? 'activeMenu':''">
                            <span class="icon-box">
                                <img v-if="activeIndex != 12" src="../assets/icon/Frame-22.png" />
                                <img v-else src="../assets/icon/Frame-23.png" />
                            </span>
                            <span class="icon-title">附录—知识点汇总</span>
                        </li>
                    </ul>
                </Collapse>
            </div>
        </transition>
        <!-- hide button -->
        <div class="hide-btn" ref="hideBtn" v-show="btnShow" @click="hideMenu">
            <img v-if="menuShow" src="../assets/icon/left.svg" />
            <img v-else src="../assets/icon/right.svg" />
        </div>
        <div class="layout-box">
            <div class="left-empty" v-show="menuShow"></div>
            <!-- content -->
            <div class="chapter-content" ref="contentBox">
                <router-view></router-view>
            </div>
            <div class="left-empty" v-show="outlineShow"></div>
        </div>
        <GoTop />
    </div>
</template>

<script>
import Collapse from '@/components/Collapse'
import GoTop from '@/components/GoTop'
export default {
    name: 'Chapter',
    components: {Collapse, GoTop},
    data() {
        return {
            activeIndex: this.$store.state.menuActiveIndex,
            expanded: true,
            up: true,
            menuShow: this.$store.state.menuShow, // 显示目录
            btnShow: true,
            menuFloat: this.$store.state.menuFloat,
            outlineShow: this.$store.state.outlineShow
        }
    },
    watch: {
        "$store.state.menuActiveIndex":{    // 监听state
            handler:function(newVal,oldVal){
                this.activeIndex = newVal
            }
        },
        "$store.state.menuShow":{
            handler:function(newVal,oldVal){
                this.menuShow = newVal
            }
        },
        "$store.state.menuFloat":{
            handler:function(newVal, oldVal){
                this.menuFloat = newVal
                this.expandMenu()
            }
        },
        "$store.state.outlineShow":{
            handler:function(newVal, oldVal){
                this.outlineShow = newVal
            }
        },
    },
    mounted() {
        this.sizeInit();
        this.cilciEvent();
        window.addEventListener('resize', this.sizeInit);
    },
    methods: {
        setActiveIndex(index) {
            this.activeIndex = index;
            if (document.body.clientWidth < 800) {
                this.$store.dispatch("floatMenu", false);
            }
            switch(index) {
                case 1: this.$router.push("ppt");break;
                case 2: this.$router.push("intro");break;
                case 3: this.$router.push("zsdt");break;
                case 4: this.$router.push("ch1");break;
                case 5: this.$router.push("ch2");break;
                case 6: this.$router.push("ch3");break;
                case 7: this.$router.push("ch4");break;
                case 8: this.$router.push("ch5");break;
                case 9: this.$router.push("ch6");break;
                case 10: this.$router.push("ch7");break;
                case 11: this.$router.push("ch8");break;
                case 12: this.$router.push("att");break;
                default: break;
            }
        },
        foldMenu() {
            this.expanded = !this.expanded;
            this.up = ! this.up;
        },
        hideMenu() {
            this.menuShow = !this.menuShow;   
            this.$store.dispatch("showMenu", this.menuShow)
            this.btnShow = false;
            new Promise((resolve) => setTimeout(resolve, 700)).then(() => this.btnShow = true)
            if (this.menuShow) {
                this.$refs['hideBtn'].style = 'left: 15%;' 
            } else {
                this.$refs['hideBtn'].style = 'left: 0;' 
            }
            
        },
        sizeInit() {
            let width = document.body.clientWidth;
            if (width < 800) {
                this.$store.dispatch("showMenu", false);    
                this.$store.dispatch("floatMenu", false);
                
                this.$store.dispatch("showLOGO", false);    // 隐藏logo，显示
                
                this.btnShow = false;   // 隐藏 按钮

                this.$store.dispatch("showOutline", false);

                this.$store.dispatch("showZsdt", false);
                
            } else {
                this.$store.dispatch("floatMenu", false);
                this.$store.dispatch("showMenu", true);    
                this.$store.dispatch("showLOGO", true);  
                this.btnShow = true;
                this.$refs['hideBtn'].style = 'left: 15%;';
                // new Promise((resolve) => setTimeout(resolve, 700)).then(() => {
                //     this.btnShow = true;
                //     this.$refs['hideBtn'].style = 'left: 15%;' 
                // })
                this.$refs['menuBox'].style = 'width: 15%;'; 

                this.$store.dispatch("showOutline", true);

                this.$store.dispatch("showZsdt", true);

            }
        },
        expandMenu() {
            if (this.menuFloat) {
                this.$refs['menuBox'].style = 'width: 50%;';
            }
        },
        cilciEvent() {
            this.$refs['contentBox'].addEventListener("click", this.hideHandler);
        },
        hideHandler() {
            if (document.body.clientWidth < 800 && this.menuFloat) {
                this.$store.dispatch("floatMenu", false)
            }
        }
    },
    beforeDestroy() {
        this.$refs['contentBox'].removeEventListener("click", this.hideHandler);
        window.removeEventListener("resize", this.sizeInit)
    }
}
</script>

<style scoped>

    /* 菜单隐藏过渡start */
    .menuFade-enter-active,  .menuFade-leave-active {
        transition: all 0.1s linear;
    }
    .menuFade-enter,  .menuFade-leave-to {
        transform: translateX(-100%);
    }
    .menuFade-leave, .menuFade-enter-to {
        transform: translateX(0);
    }
    .contentTelescope-enter, .contentTelescope-leave-to {
        transform: translateX(0);
        
    }
    .contentTelescope-leave, .contentTelescope-enter-to {
        transform: translateX(15%);
    }
    /* 菜单隐藏过渡end */

    .hide-btn {
        position: fixed;
        z-index: 1;
        left: 15%;
        top: 80px;
        width: 20px;
        height: 40px;
        background-color: #fff;
        cursor: pointer;
        border-radius: 8px;
        transition: left .2s linear;
    }
    .hide-btn img {
        width: 100%;
        height: 100%;
    }
    .hide-btn:hover {
        background-color: #eff0f0;
        box-shadow: 0px 0px 5px rgba(0, 0, 255, .2);     
    }

    .chapter-page {
        width: 100%;
        height: 100%;
        margin-top: 64px;
    }

    .layout-box {
        display: flex;
        width: 100%;
    }
    .left-empty {
        width: 15%;
        background-color: #E5E5E5;
    }

    .self-menu {
        position: fixed;
        left: 0;
        width: 15%;
        background: #E5E5E5;
        height: calc(100% - 64px);
        overflow-y: auto;
        z-index: 1;
    }
    .self-menu::-webkit-scrollbar {
        width: 8px;
    }
    .self-menu::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 5px;
    }

    .chapter-content {
        flex-grow: 1;
        width: 70%;
    }

    .menu-nav > li{
        list-style-type: none;
        font-family: 'AliMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 38px;
        height: 38px;
        margin: 5px 10px;
        cursor: pointer;
        overflow: hidden;
        color: #555555;
    }

    .menu-nav > li:hover {
        background: rgba(0, 98, 242, 0.1);
        border-radius: 8px;

    }
    .icon-box > img {
        width: 20px;
        height: 20px;
        vertical-align:text-top;
    }

    .icon-title {
        margin-left: 3px;
    }

    .menu-title {
        height: 36px;
        padding: 5px 5px;
        cursor: pointer;
        overflow: hidden;
    }
    
    .menu-title > img {
        width: 20px;
        height: 20px;
        vertical-align:text-top;
    }
    .menu-title > span {
        font-family: 'AliMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        color: #555555;
        margin-left: 10px;
    }
    .menu-title:nth-child(2) > img:nth-child(3) {
        position: absolute;
        right: 10px;
        margin-top: 6px;
    }
    .menu-title:hover {
        background: rgba(0, 98, 242, 0.1);
        border-radius: 8px;
    }

    

    /* .active img:first-child {
        display: none;
    } */
    .activeMenu .icon-title {
        color: #0062F2;
    }

    a { text-decoration: none; }
    a:link {color:#555555;} 
    a:visited {color: #555555;} 
    a:hover {color: #555555;}
    a:active {color: #555555;} 
</style>