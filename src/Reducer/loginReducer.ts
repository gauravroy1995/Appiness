
import {types} from '../Types/ActionTypes'

const INITIAL_STATE = {
  username: '',
  password: '',
  user:[{ 
    "id":1, 
    "name":"Employee_One", 
    "age" : "21", 
    "gender":"Female", 
    "email" : "employee.one@react.com", 
    "phoneNo" : "9812312312" 
    }, 
    { 
    "id" : 2, 
    "name":"Employee_Two", 
    "age" : "23", 
    "gender":"Female", 
    "email" : "employee.two@react.com", 
    "phoneNo" : "9534534534" 
    }, 
    { 
    "id":3, 
    "name":"Employee_Three", 
    "age" : "30", 
    "gender":"Male", 
    "email" : "employee.three@react.com", 
    "phoneNo" : "8878978978" }, 
    { 
    "id":4, 
    "name":"Employee_Four", 
    "age" : "42", 
    "gender":"Female", 
    "email" : "employee.four@react.com", 
    "phoneNo" : "7045645645" }, 
    { 
    "id":5, 
    "name":"Employee_Five", 
    "age" : "29", 
    "gender":"Male", 
    "email" : "employee.five@react.com", 
    "phoneNo" : "8123898901" }, 
    { 
    "id":6, 
    "name":"Employee_Six", 
    "age" : "25", 
    "gender":"Male", 
    "email" : "employee.six@react.com", 
    "phoneNo" : "9988009976" } 
    ] 
    

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
