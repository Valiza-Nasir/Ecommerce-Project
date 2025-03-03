import axios from "axios"
import { BASE_URL } from "./auth"

export const singleEmailApi=async(data)=>{
  try {
    const response=await axios.post(`${BASE_URL}api/otp`,data);
    return response.data;
  } catch (error) {
    console.log('Failed to Post Email');
  }
}