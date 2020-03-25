export const state = () => ({ menuList: [] })

export const mutations = {
  setMenuList(state, value) {
    state.menuList = value
  }
}

export const actions = {
  setMenu({ commit }, menus) {
    commit('setMenu', menus)
  }
}
