
import {types} from '../Types/ActionTypes'

const INITIAL_STATE = {
  username: '',
  password: '',

}

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SAVE_USERNAME:
      return { ...state, username: action.payload }
    case types.SAVE_PASS:
      return { ...state, password: action.payload }
    case types.RESET:
      return {...INITIAL_STATE}
    default:
      return state;
  }
}
