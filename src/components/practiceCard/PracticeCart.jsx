import React, { useEffect, useState } from 'react'
// import { viewBasketnoParams } from '../../apis/viewbasket';
import { getTokenFromLocal } from '../../utils';

function PracticeCart() {
  const [data,setData]=useState([])
  const getData=async()=>{
    const token=getTokenFromLocal()
    try {
      // const response=await viewBasketnoParams(token)
      console.log('response',response);
      return response;  
    } catch (error) {
     console.log('Failed to Load Data');
    }
  }
  useEffect(()=>{
   getData()
  },[])
  return (
    <>
    
    
    
    
    </>
  )
}

export default PracticeCart