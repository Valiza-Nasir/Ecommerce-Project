import axios from "axios";
import { BASE_URL } from "./auth";

export const cartApi=async()=>{
  try {
    const response=await axios.post(`${BASE_URL}`)
    return response.data;
  } catch (error) {
    console.log('Failed to Fetch api');
  }
}