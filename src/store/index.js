import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuActiveIndex: 1, // 保存目录激活项
        logoShow: true, // 保存header-logo与menu的显示状态
        menuShow: true, // 保存目录是否显示
        menuFloat: false,
        outlineShow: true, // 保存大纲是否显示
        zsdtShow: true,
        isHome: false
    },
    getters: {},
    mutations: {
        SET_MENUACTIVEINDEX: (state, index) => {
            state.menuActiveIndex = index
        },
        SET_LOGOSHOW: (state, show) => {
            state.logoShow = show
        },
        SET_MENUSHOW: (state, show) => {
            state.menuShow = show
        },
        SET_MENUFLOAT: (state, float) => {
            state.menuFloat = float
        },
        SET_OUTLINESHOW: (state, show) => {
            state.outlineShow = show
        },
        SET_ZSDTSHOW: (state, show) => {
            state.zsdtShow = show
        },
        SET_ISHOME: (state, real) => {
            state.isHome = real
        }
    },
    actions: {
        toChapter({ commit }, index) {
            commit('SET_MENUACTIVEINDEX', index)
        },
        showLOGO({ commit }, show) {
            commit('SET_LOGOSHOW', show)
        },
        showMenu({ commit }, show) {
            commit('SET_MENUSHOW', show)
        },
        floatMenu({ commit }, float) {
            commit('SET_MENUFLOAT', float)
        },
        showOutline({ commit }, show) {
            commit("SET_OUTLINESHOW", show)
        },
        showZsdt({ commit }, show) {
            commit("SET_ZSDTSHOW", show)
        },
        nowHome({ commit }, real) {
            commit("SET_ISHOME", real)
        }
    },
    modules: {}
})