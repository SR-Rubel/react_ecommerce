import { createSlice } from '@reduxjs/toolkit'


export const brandSlice = createSlice({
  name: 'brands',
  initialState:{
    brands:null,
  },
  reducers: {
    setBrands: (state,{payload}) => {
      state.brands=payload;
    },
    addBrand: (state,{payload}) => {
      state.brands.push(payload);
    },
    deleteBrand: (state,{payload}) => {
      state.brands=state.brands.filter(p=>p.id!==payload);
    },
    editBrand: (state,{payload}) => {
      state.brands.map(brand=>{
        if(brand.id===payload.id)
          brand.name=payload.edit.name
        return brand
       });
    },

  },
})

// Action creators are generated for each case reducer function
export const { setBrands,addBrand,deleteBrand,editBrand } = brandSlice.actions

export default brandSlice.reducer