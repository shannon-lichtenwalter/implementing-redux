import { storeInitialized } from './actions.js'
export default {
  createStore,
  applyMiddleware,
}

function createStore(reducer, initialState) {
  if (!reducer || typeof reducer !== 'function')
    throw new Error('Must provide valid reducer function')

  const store = {}
  store.state = initialState
    ? initialState
    : reducer(undefined, storeInitialized())
  store.listeners = []

  store.getState = () => store.state

  store.dispatch = action => {
    if (!action.type) throw new Error('Must provide valid action type')
    store.state = reducer(store.state, action)
    store.listeners.forEach(listener => listener(store.state))
  }

  store.subscribe = fn => {
    store.listeners.push(fn)
    return () =>
      (store.listeners = store.listeners.filter(listener => listener !== fn))
  }

  return store
}

function applyMiddleware() { }
