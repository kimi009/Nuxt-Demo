const state = () => ({ menuList: [] })

const mutations = {
  setMenuList(state, value) {
    state.menuList = value
  }
}

const actions = {
  setMenu({ commit }, menus) {
    commit('setMenu', menus)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
