import Dedux from './dedux.js'
import { counterIncreased, counterDecreased, counterReset } from './actions.js'
import reducer from './reducer.js'
const { createStore } = Dedux

const store = createStore(reducer)

document
  .querySelector('#up')
  .addEventListener('click', () => store.dispatch(counterIncreased()))

document
  .querySelector('#down')
  .addEventListener('click', () => store.dispatch(counterDecreased()))

document
  .querySelector('#reset')
  .addEventListener('click', () => store.dispatch(counterReset()))

store.subscribe(
  state => (document.querySelector('#count').innerHTML = state.count)
)
