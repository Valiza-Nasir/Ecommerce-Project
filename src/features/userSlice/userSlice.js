import { createSlice } from '@reduxjs/toolkit'

const getDataFromLocal=()=>{
  try {
    const data=localStorage.getItem('userecommerce');
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.log('Failed to Load Data from Local');
  }
}
const savetDataInmLocal=(userdata)=>{
  try {
    localStorage.setItem('userecommerce',JSON.stringify(userdata))
  } catch (error) {
    console.log('Failed to Save Data in Local');
  }
}

const initialState = {
  user:getDataFromLocal()
}
 
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   login:(state,action)=>{
   state.user.push(action.payload)
   savetDataInmLocal(state.user)
   alert('Sign Up Successfully')   
   },
   deletebtn:(state,action)=>{
   state.user=state.user.filter((value)=>value.id!==action.payload);
   savetDataInmLocal(state.user)
   alert('USER DELETED')
   }
  },
})

export const { login,deletebtn } = userSlice.actions

export default userSlice.reducer