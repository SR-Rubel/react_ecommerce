import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'Products',
  initialState:{
    products:null,
  },
  reducers: {
    setProducts: (state,{payload}) => {
      state.products=payload;
    },
    addProducts: (state,{payload}) => {
      state.products.push(payload);
    },
    deleteProducts: (state,{payload}) => {
      state.products=state.products.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer