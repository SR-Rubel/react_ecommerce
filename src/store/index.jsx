import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import subcategoryReducer from './subcategorySlice';
import brandReducer from './brandSlice';
import userProductReducer from './userProductSlice';

export default configureStore({
  reducer: {
      products:productReducer,
      categories:categoryReducer,
      subcategories:subcategoryReducer,
      brands:brandReducer,
      userProducts:userProductReducer,

  },
})