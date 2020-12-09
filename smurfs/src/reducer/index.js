import { GET_DATA } from "../actions"


const initialState =  [ {
  name: "",
  age: "",
  height: "",
  id: ""

} ]

export const smurfDataReducer = (state= initialState, action) =>{
    switch (action.type){
      case GET_DATA:
        return{
          ...state,
          payload: action.payload
        }
      default:
        return state
    }
  }