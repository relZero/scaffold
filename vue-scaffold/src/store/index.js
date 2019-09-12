import Vuex from 'vuex'

import defaultState from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default () => {
  const store = new Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions
  })

  if (module.hot) {
    module.hot.accept([
      './state',
      './mutations',
      './getters',
      './actions'
    ], () => {
      const newState = require('./state').default
      const newMutations = require('./mutations').default
      const newGetters = require('./getters').default
      const newActions = require('./actions').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
