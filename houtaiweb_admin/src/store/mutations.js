//同步提交状态
const mutations = {
    ['SET_PAGINATION_DATA'](state, data){
       state.pagination = data
    },
    ['SET_TABMENU'](state, data){
        state.tabMenu = data
    },
    ['SET_MENU_LIST'](state, data){
        state.menuList = data
    }
}
export default mutations