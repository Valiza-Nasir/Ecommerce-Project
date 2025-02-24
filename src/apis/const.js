import axios from "axios";
import { BASE_URL } from "./auth";
import { setTokenInLocal } from "../utils";

export const getFullData=async()=>{
  try {
    const response=await axios.get(`${BASE_URL}api/user/products`)
    return response.data;
  } catch (error) {
    console.log('Failed to Get Data'); 
  }
}
export const signUp=async(data)=>{
  try {
    const response=await axios.post(`${BASE_URL}api/register`,data);
    return response.data;
  } catch (error) {
    console.log('Login Failed',error);
    throw error
  }
}
export const login=async(data)=>{
  try {
    const response=await axios.post(`${BASE_URL}api/login`,data);
   setTokenInLocal(response.data.token)
    console.log('response',response.data);
    return response.data;
  } catch (error) {
    console.log('Login Failed',error);
    throw error
  }
}

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YmIxMjcwN2EzYTBmOWE4NjRjMDAzNCIsImVtYWlsIjoieWFzbWVlbkBnbWFpbC5jb20iLCJpYXQiOjE3NDAzMTMzMDIsImV4cCI6MTc0MDMxNjkwMn0.4jxWiqLQEyQ_574NGgbm8k4pBZNvSY2jrX0XVX-pBK0"













const url='https://fakestoreapi.com/products'

export  const categoryData=async(Parameter)=>{
  try {
    const response=await axios.get(`${url}${Parameter ? `/category/${Parameter}` : ''}`)
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.log('Failed to load Data');
  }
}