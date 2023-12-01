import { GET_USERS,GET_USER } from "../actionType";
import { baseUrl } from "../../config";
import { fetchData } from "../../utils/fetchData";

export const getUsers=()=>async dispatch=>{   
    let {data,loading,error}= await fetchData(`${baseUrl}users`,"GET")
    dispatch({
        type:GET_USERS,
        payload:data
    })
}

export const getUser=(id)=>async dispatch=>{
    let {data,loading,error}= await fetchData(`${baseUrl}users?id=${id}`,"GET")
    dispatch({
        type:GET_USER,
        payload:data
    }) 
}

export const getSearchUsers= (value) => async dispatch => {
    let {data,loading,error} = await fetchData(`${baseUrl}users?name_like=${value}`,"GET")
    dispatch({
        type: GET_USERS,
        payload: data,
  });
}

