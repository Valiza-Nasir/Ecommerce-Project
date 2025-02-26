import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice/userSlice'
import cartReducer from '../features/cartSlice/cartSlice'
import addReducer from '../features/addSlice/addSlice'

export const store = configureStore({
  reducer: {
  user:userReducer,
  cart:cartReducer,
  product:addReducer,
  },
})