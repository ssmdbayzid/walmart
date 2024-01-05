import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const initialState = {
  cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQty  : 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ======= Increase or Add cart item
    addToCart(state, action){
      const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Increase ${state.cartItems[itemIndex].name} cart quantity`)
        
        // Updated data store to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      }
      else{
        const newCartItem = {...action.payload, cartQuantity: 0}
        state,cartItems.push(newCartItem)

        // =========== Toast ============
        toast.success(`${action.payload.name} added to cart`)

        // Updated data store to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      }
    },

    // ======= Decreate cart item =====

    decreaseCartQty(state, action){
      const  itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)

      if(state.cartItems[itemIndex].cartQuantity > 1){
        
        state.cartItems[itemIndex].cartQuantity -= 1;

        // ======= Toast =============
        toast.error(`Decrease ${state.cartItems[itemIndex].name} cart quantity`)
      }
      else if(state.cartItems[itemIndex].cartQuantity === 1){
        state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id)

        // =========== Toast =============
        toast.error(`${action.payload.name} remove from cart`)

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      }
    },
    removeCartItem(state, action){
      state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id)
      
      // ================== Toast ===============
      toast.error(`${action.payload.name} remove from cart`)
      
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    resetCartItem(state, action){
      state.cartItems = [];

      //============ Toast =========
      toast.error("Reset cart Items")
    },
    getTotals(state){
      let {total, quantity} = state.cartItems.reduct((cartTotal, cartItem)=> {
        const {price, cartQuantity} = cartItems;
        const itemTotalPrice = price * cartQuantity;

        cartTotal.total += itemTotalPrice;
        cartTotal.quantity += cartQuantity;
      }, {
        total: 0,
        quantity: 0,
      })
    }
  }
})

export const {addToCart, decreaseCartQty, removeCartItem, resetCartItem,getTotals} = cartSlice.actions;

export default cartSlice.reducer;