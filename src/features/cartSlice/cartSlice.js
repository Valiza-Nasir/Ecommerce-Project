import { createSlice } from '@reduxjs/toolkit'

const getDataFromLocal=()=>{
  try {
    const data=localStorage.getItem('count')
    return data? JSON.parse(data) : 0 
  } catch (error) {
    console.log('Failed to Load Data'); 
  }
}
const saveDataToLocal=(userCount)=>{
try {
  localStorage.setItem('count',JSON.stringify(userCount))
} catch (error) {
  console.log('Failed to Save Data');
}
}
const getFromLocal=()=>{
  try {
    const data=localStorage.getItem('itemsdata')
    return data? JSON.parse(data) : []
  } catch (error) {
    console.log('Failed to Load Data'); 
  }
}
const saveToLocal=(userData)=>{
try {
  localStorage.setItem('itemsdata',JSON.stringify(userData))
} catch (error) {
  console.log('Failed to Save Data');
}
}
const initialState = {
  value: getDataFromLocal() || 0,
  datas:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addCart:(state)=>{
    // state.value+=1
    // saveDataToLocal(state.value)
   },
   productData:(state,action)=>{
     const existingItem=state.datas.findIndex((item)=>item.id===action.payload.id)
     if(existingItem===-1){
      state.datas.push({...action.payload,quantity:1})
      state.value+=1
      // saveDataToLocal(state.value)
     }else{
      // state.datas[existingItem]={
      //   ...state.datas[existingItem],
      //   quantity:state.datas[existingItem].quantity+=1
      // }
        state.datas[existingItem].quantity+=1
      state.value+=1
      // saveDataToLocal(state.value)
     }  
    //  saveToLocal(state.datas)    
   },
   deleteFunc:(state,action)=>{
    const find=state.datas.findIndex((item)=>item.id===action.payload)
    if(find!==-1){
      state.value-=state.datas[find].quantity
      state.datas=state.datas.filter((item)=>item.id!==action.payload)
      // saveDataToLocal(state.value)
    //  saveToLocal(state.datas)
     alert('Data Deleted Successfully')
    } 
  },
   increment:(state,action)=>{
    const find=state.datas.findIndex((item)=>item.id===action.payload)
    if(find!==-1){
      state.datas[find].quantity+=1;
      state.value+=1;
    }
    
    //  saveDataToLocal(state.value)
    //  saveToLocal(state.datas)
   },
   decrement: (state, action) => {
    const find = state.datas.findIndex((item) => item.id === action.payload);
    if (find !== -1 && state.datas[find].quantity > 1) {
      state.datas[find].quantity -= 1;
      state.value = Math.max(0, state.value - 1);
    }
  }
  },
})

export const { addCart,productData,deleteFunc,increment,decrement } = cartSlice.actions

export default cartSlice.reducer