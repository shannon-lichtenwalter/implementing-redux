import * as actions from './actionTypes.js'

export default function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case actions.COUNTER_UP:
      return {
        ...state,
        count: state.count + 1,
      }
    case actions.COUNTER_DOWN:
      return {
        ...state,
        count: state.count - 1,
      }
    case actions.COUNTER_RESET:
      return {
        ...state,
        count: 0,
      }
    default:
      return state
  }
}
