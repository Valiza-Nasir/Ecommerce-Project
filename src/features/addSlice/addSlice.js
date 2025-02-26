import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const addSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  quanityFunc:()=>{
   state.value+=1;
  }
  },
})
export const { quanityFunc } = addSlice.actions

export default addSlice.reducer