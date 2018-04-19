import { createStore, combineReducers } from 'redux'


const initialBoardState = {
  rows: [],
  columns: [],
  boardCords: [],
  status: {
    placed: false,
    generated: false
  }
}

const initialRoboState = {
  roboLog: [],
  validMove: [],
  roboDirection: null,
  roboCurrentPosition: null
}

const Board = (state=initialBoardState, action) => {
  switch (action.type) {
    case 'GENERATE_BOARD':
      let arrRows = []
      let arrColumns= []
      for(let i = 0 ; i < action.payload.rows ; i++) {
        arrRows.push(i)
      }
      for(let i = 0 ; i < action.payload.columns ; i++) {
        arrColumns.push(i)
      }
      return {
        ...state,
        rows: arrRows,
        columns: arrColumns
      }
      default:
        return state
  }
}

const Robo = (state=initialRoboState, action) => {
  switch (action.type) {
    case 'PLACE' :
      return {
        ...state,
        roboCurrentPosition: '00',
        roboDirection: 'right'
      }
    case 'VALIDMOVE' : {
      let newState = {...state}
      newState.validMove.push(action.payload)
      return newState
    }
    case 'DIRECTION' :
      return {
        ...state,
        roboDirection: action.payload
      }
    case 'MOVE' :
    let newState = {
      ...state
    }
    let currentPos = newState.roboCurrentPosition.split('')
      if (newState.roboDirection === 'right') {
        let cordMove = +currentPos[1]
        cordMove ++
        currentPos[1] = cordMove.toString()
        if (newState.validMove.indexOf(currentPos.join('')) !== -1) {
          newState.roboCurrentPosition = currentPos.join('')
          return newState
        } else {
          alert('invalid move')
          return state
        } 
      } else if (newState.roboDirection === 'left') {
        let cordMove = +currentPos[1]
        cordMove --
        currentPos[1] = cordMove.toString()
        if (newState.validMove.indexOf(currentPos.join('')) !== -1) {
          newState.roboCurrentPosition = currentPos.join('')
          return newState
        } else {
          alert('invalid move')
          return state
        } 
      } else if (newState.roboDirection === 'up') {
        let cordMove = +currentPos[0]
        cordMove ++
        currentPos[0] = cordMove.toString()
        if (newState.validMove.indexOf(currentPos.join('')) !== -1) {
          newState.roboCurrentPosition = currentPos.join('')
          return newState
        } else {
          alert('invalid move')
          return state
        } 
      } else if (newState.roboDirection === 'down') {
        let cordMove = +currentPos[0]
        cordMove --
        currentPos[0] = cordMove.toString()
        if (newState.validMove.indexOf(currentPos.join('')) !== -1) {
          newState.roboCurrentPosition = currentPos.join('')
          return newState
        } else {
          alert('invalid move')
          return state
        } 
      }
    default:
      return state
   }
}

const appStore = combineReducers({
  Board,
  Robo
})

const store = createStore(
  appStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store