import { BASE_URL } from "./auth";
import axios from "axios";
export const viewBasket=async(token,page,limit)=>{
try {
  const response=await axios.get(`${BASE_URL}api/user/basketProduct?page=1&limit=5`,{
    headers:{Authorization:`Bearer ${token}`}
  })
  return response.data
} catch (error) {
 console.log('Failed to view Basket');
}
}