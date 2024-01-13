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
        toast.info(`Increase ${state.cartItems[itemIndex].title} cart quantity`)
        
        // Updated data store to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      }
      else{
        const newCartItem = {...action.payload, cartQuantity: 1}
        state.cartItems.push(newCartItem)

        // =========== Toast ============
        toast.success(`${action.payload.title} added to cart`)

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
        toast.error(`Decrease ${state.cartItems[itemIndex].title} cart quantity`)
      }
      else if(state.cartItems[itemIndex].cartQuantity === 1){
        state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id)

        // =========== Toast =============
        toast.error(`${action.payload.title} remove from cart`)

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      }
    },
    removeCartItem(state, action){
      state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id)
      
      // ================== Toast ===============
      toast.error(`${action.payload.title} remove from cart`)
      
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    resetCartItem(state, action){
      state.cartItems = [];

      //============ Toast =========
      toast.error("Reset cart Items")
    },
    getTotal(state){

      
    let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{

      
      const {price, cartQuantity} = cartItem;
      const itemTotalPrice = price * cartItem.cartQuantity;

      cartTotal.total += itemTotalPrice;
      cartTotal.quantity += cartQuantity;   
      
      return cartTotal;
  }, {
      total: 0,
      quantity : 0,
  })

  state.cartTotalQty = quantity;
  state.cartTotalAmount = total;

    }
  }
})

export const {addToCart, decreaseCartQty, removeCartItem, resetCartItem, getTotal} = cartSlice.actions;

export default cartSlice.reducer;

/*
let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
        const {price, cartQuantity} = cartItem;
        const itemTotalPrice = price * cartQuantity;
        console.log(cartTotal)
        cartTotal.total += itemTotalPrice;
        cartTotal.quantity += cartQuantity;
      }, {
        total: 0,
        quantity: 0,
      })
      state.cartTotalAmount = total
      state.cartTotalQty = quantity
    }
    */