import Vue from 'vue'
import VueRouter from 'vue-router'
// import Contents from '../views/Contents.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/home.vue'),
        meta: {
            title: '《C/C++简明双链教程》'
        },
    },
    {
        path: '/chapter',
        component: () =>
            import ('@/views/Chapter'),
        children: [{
                path: '/ppt',
                name: 'ppt',
                component: () =>
                    import ('../views/Ppt.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-课件'
                }
            }, {
                path: '/intro',
                name: 'intro',
                component: () =>
                    import ('../views/Intro.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-前言'
                },
            }, {
                path: '/zsdt',
                name: 'zsdt',
                component: () =>
                    import ('../views/Zsdt.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-知识地图'
                }
            }, {
                path: '/ch1',
                name: 'ch1',
                component: () =>
                    import ('@/views/Ch1.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-第一章'
                }
            }, {
                path: '/ch2',
                name: 'ch2',
                component: () =>
                    import ('@/views/Ch2.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-第二章'
                }
            }, {
                path: '/ch3',
                name: 'ch3',
                component: () =>
                    import ('@/views/Ch3.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-第三章'
                }
            }, {
                path: '/ch4',
                name: 'ch4',
                component: () =>
                    import ('../views/Ch4.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-第四章'
                }
            },
            {
                path: '/ch5',
                name: 'ch5',
                component: () =>
                    import ('../views/Ch5.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-第五章'
                }
            },
            {
                path: '/ch6',
                name: 'ch6',
                component: () =>
                    import ('../views/Ch6.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-第六章'
                }
            },
            {
                path: '/ch7',
                name: 'ch7',
                component: () =>
                    import ('../views/Ch7.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-第七章'
                }
            },
            {
                path: '/ch8',
                name: 'ch8',
                component: () =>
                    import ('../views/Ch8.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-第八章'
                }
            },
            {
                path: '/att',
                name: 'att',
                component: () =>
                    import ('@/views/Att.vue'),
                meta: {
                    title: '《C/C++简明双链教程》-附录'
                }
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) { // 如果有锚点
            return {
                selector: to.hash // 返回指向的元素选择器
            }
        }
    }
})



const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router