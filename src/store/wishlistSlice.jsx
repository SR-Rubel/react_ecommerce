import { createSlice } from '@reduxjs/toolkit'


export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState:{
    wishlist:[],
  },
  reducers: {
    setWishlist: (state,{payload}) => {
      state.wishlist=payload;
    },
    addWishlist: (state,{payload}) => {
      state.wishlist.push(payload);
    },
    deleteWishlist: (state,{payload}) => {
      state.wishlist=state.wishlist.filter(p=>p.id!==payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setWishlist,addWishlist,deleteWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer