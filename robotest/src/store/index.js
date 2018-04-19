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
  roboLogs: [],
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
    let roboLog = {
      action: 'PLACE',
      value: '0,0,EAST',
      creator: 'ferdy26790@gmail.com'
    }
    let newLogs = [roboLog]
      return {
        ...state,
        roboCurrentPosition: '00',
        roboDirection: 'right',
        roboLog: newLogs
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
          let valueLog = [...currentPos, 'EAST']
          let newLog = {
            action: 'MOVE',
            value: valueLog,
            creator: 'ferdy26790@gmail.com'
          }
          newState.roboLog.push(newLog)
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
          let valueLog = [...currentPos, 'WEST']
          let newLog = {
            action: 'MOVE',
            value: valueLog,
            creator: 'ferdy26790@gmail.com'
          }
          newState.roboLog.push(newLog)
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
          let valueLog = [...currentPos, 'NORTH']
          let newLog = {
            action: 'MOVE',
            value: valueLog,
            creator: 'ferdy26790@gmail.com'
          }
          newState.roboLog.push(newLog)
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
          let valueLog = [...currentPos, 'SOUTH']
          let newLog = {
            action: 'MOVE',
            value: valueLog,
            creator: 'ferdy26790@gmail.com'
          }
          newState.roboLog.push(newLog)
          return newState
        } else {
          alert('invalid move')
          return state
        } 
      }
      break;
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