import { createSlice } from '@reduxjs/toolkit'


export const categorySlice = createSlice({
  name: 'categories',
  initialState:{
    categories:null,
  },
  reducers: {
    setCategories: (state,{payload}) => {
      state.categories=payload;
    },
    addCategory: (state,{payload}) => {
      state.categories.push(payload);
    },
    editCategory: (state,{payload}) => {
      state.categories.map(category=>{
        if(category.id===payload.id)
          category.name=payload.edit.name
        return category
       });
    },
    deleteCategroy: (state,{payload}) => {
      state.categories=state.categories.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategories,addCategory,deleteCategroy,editCategory} = categorySlice.actions

export default categorySlice.reducer