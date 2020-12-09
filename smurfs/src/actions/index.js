import axios from "axios"

export const GET_DATA = "GET_DATA"
export const JOB_DONE = "JOB_DONE"

export const getJob = (url) => (dispatch) =>{
  dispatch({type: GET_DATA})
  axios .get(url)
  .then((res) => {
    dispatch({type: JOB_DONE, payload: res.data })

  })
}