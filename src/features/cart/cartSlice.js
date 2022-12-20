import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        console.log(action)
        const selectedProducts=state.cart.find(
            (product=>product._id  === action.payload._id)

        )

        if(!selectedProducts){
            const product ={...action.payload,quantity:1};
            state.cart.push(product)
        }else{
            selectedProducts.quantity +=1
            state.cart.filter((product)=>product._id !==selectedProducts._id)
            .push(selectedProducts)
        }
       
        
    },


    removeFromCart:(state,action)=>{
     
      if(action.payload.quantity>1){
        const product={
          ...action.payload,
          quantity:action.payload.quantity-1,


        }
        state.cart=state.cart.filter(product=>product._id !== action.payload._id);
        state.cart.push(product);
      }
 

      else{
state.cart=state.cart.filter(product=>product._id !== action.payload._id);
      }

    }
  }


 

})

export const { addToCart,removeFromCart } = cartSlice.actions
export default cartSlice.reducer

