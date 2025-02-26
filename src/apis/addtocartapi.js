import axios from "axios";
import { BASE_URL } from "./auth";
export const addCart=async(cartItems,token)=>{
  try {
    const response=await axios.post(`${BASE_URL}api/user/addtocart`,cartItems,{
      headers:{Authorization:`Bearer ${token}`,
      "Content-Type":"application/json"
    }
    })
    return response.data;  
  } catch (error) {
    console.log('Failed to add product to cart');
  }
}