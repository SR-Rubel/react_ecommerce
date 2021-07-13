import { createSlice } from '@reduxjs/toolkit'


export const brandSlice = createSlice({
  name: 'brands',
  initialState:{
    brands:null,
  },
  reducers: {
    setProducts: (state,{payload}) => {
      state.brands=payload;
    },
    addProducts: (state,{payload}) => {
      state.brands.push(payload);
    },
    deleteProducts: (state,{payload}) => {
      state.brands=state.brands.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = brandSlice.actions

export default brandSlice.reducer