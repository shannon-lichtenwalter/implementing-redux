import * as actions from './actionTypes.js'

export const storeInitialized = () => ({
  type: actions.INITIALIZE_STORE,
})

export const counterIncreased = () => ({
  type: actions.COUNTER_UP,
  payload: {
    description: 'counter increased',
  },
})

export const counterDecreased = () => ({
  type: actions.COUNTER_DOWN,
  payload: {
    description: 'counter decreased',
  },
})

export const counterReset = () => ({
  type: actions.COUNTER_RESET,
  payload: {
    description: 'counter reset',
  },
})
