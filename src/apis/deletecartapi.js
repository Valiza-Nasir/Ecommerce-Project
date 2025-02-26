import axios from "axios";
import { BASE_URL } from "./auth";

export const deleteCart=async(id,token)=>{
  try {
    const response=await axios.delete(`${BASE_URL}api/user/basketProduct/${id}`,{
      headers:{Authorization:`Bearer ${token}`}
    })
    console.log('Delete api response',response);
    return response.data;
  } catch (error) {
    console.log('Failed to delete Product');
  }
}

// api/user/basketProduct/:id