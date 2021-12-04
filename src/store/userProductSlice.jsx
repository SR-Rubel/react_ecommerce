import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'userProducts',
  initialState:{
    userProducts:[],
  },
  reducers: {
    setProducts: (state,{payload}) => {
      state.userProducts=payload;
    },
    addProducts: (state,{payload}) => {
      state.userProducts.push(payload);
    },
    deleteProducts: (state,{payload}) => {
      state.userProducts=state.products.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts,addProducts,deleteProducts } = productSlice.actions

export default productSlice.reducer