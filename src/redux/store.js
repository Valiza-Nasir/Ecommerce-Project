import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice/userSlice'
import cartReducer from '../features/cartSlice/cartSlice'

export const store = configureStore({
  reducer: {
  user:userReducer,
  cart:cartReducer,
  },
})