import { createSlice } from '@reduxjs/toolkit'


export const categorySlice = createSlice({
  name: 'categories',
  initialState:{
    categories:null,
  },
  reducers: {
    setProducts: (state,{payload}) => {
      state.categories=payload;
    },
    addProducts: (state,{payload}) => {
      state.categories.push(payload);
    },
    deleteProducts: (state,{payload}) => {
      state.categories=state.categories.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = categorySlice.actions

export default categorySlice.reducer