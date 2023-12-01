import { fetchData } from "@/app/utils/fetchData";
import { GET_BLOGS, GET_CATEGORY_BLOGS, GET_BLOG} from "../actionType";
import { baseUrl } from "@/app/config";

export const getBlogs=()=> async dispatch => { 
  let {data, loading, error}= await fetchData(`${baseUrl}blogs`,"GET")
  dispatch({
    type:GET_BLOGS,
    payload:data
  })  
}

// export const getBlog=(id)=>async dispatch=>{   
//   let {data, loading, error}= await fetchData(`${baseUrl}api/blogs?id=${id}`,"GET")
//   dispatch({
//     type:GET_BLOG,
//     payload:data
//   })   
// }

// export const getMyBlogs=()=>async dispatch=>{
//   let id=parseInt( sessionStorage.getItem( "user-id" ) );
//   let {data,loading,error}= await fetchData(`${baseUrl}api/blogs?blogger_id=${id}`,"GET")
//   dispatch({
//     type:GET_BLOGS,
//     payload:data
//   })    
// }

// export const getBlogsByCategory=(category)=>async dispatch=>{
//   let {data,loading,error}= await fetchData(`${baseUrl}blogs?category_like=${category}`,"GET")
//   dispatch({
//     type:GET_CATEGORY_BLOGS,
//     payload:data
//   })
// }

// export const getSearchResults = (value) => async dispatch =>{
//   let {data,loading,error}= await fetchData(`${baseUrl}blogs?title_like=${value}`,"GET")
//   dispatch({
//     type: GET_BLOGS,
//     payload: data,
//   });
// }

// export const getBlogsByUser = (id) => async dispatch =>{
//   let {data,loading,error}= await fetchData(`${baseUrl}blogs?blogger_id=${id}`,"GET")
//   dispatch({
//     type: GET_BLOGS,
//     payload: data,
//  });
// }

 



