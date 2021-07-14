import { createSlice } from '@reduxjs/toolkit'


export const subcategorySlice = createSlice({
  name: 'subcategories',
  initialState:{
    subcategories:null,
  },
  reducers: {
    setSubCategories: (state,{payload}) => {
      state.subcategories=payload;
    },
    addSubCategory: (state,{payload}) => {
      state.subcategories.push(payload);
    },
    editSubCategory: (state,{payload}) => {
      state.subcategories.map(category=>{
        if(category.id===payload.id)
          category.name=payload.edit.name
        return category
       });
    },
    deleteSubCategroy: (state,{payload}) => {
      state.subcategories=state.subcategories.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSubCategories,addSubCategory,editSubCategory,deleteSubCategroy } = subcategorySlice.actions

export default subcategorySlice.reducer