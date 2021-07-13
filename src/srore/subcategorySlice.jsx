import { createSlice } from '@reduxjs/toolkit'


export const subcategorySlice = createSlice({
  name: 'subcategories',
  initialState:{
    subcategories:null,
  },
  reducers: {
    setProducts: (state,{payload}) => {
      state.subcategories=payload;
    },
    addProducts: (state,{payload}) => {
      state.subcategories.push(payload);
    },
    deleteProducts: (state,{payload}) => {
      state.subcategories=state.subcategories.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = subcategorySlice.actions

export default subcategorySlice.reducer