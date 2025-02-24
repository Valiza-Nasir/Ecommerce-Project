import { BASE_URL } from "./auth";
import axios from "axios";

export const getProductData=async(id)=>{
  try {
    const response=await axios.get(`${BASE_URL}api/user/productDetails/${id}`)
    return response.data;
  } catch (error) {
    console.log('Failed to Get Data'); 
  }
}