import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cart:[],
  },
  reducers: {
    setCart: (state,{payload}) => {
      state.cart=payload;
    },
    addCart: (state,{payload}) => {
      state.cart.push(payload);
    },
    deleteCart: (state,{payload}) => {
      state.cart=state.cart.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCart,addCart,deleteCart } = cartSlice.actions

export default cartSlice.reducer