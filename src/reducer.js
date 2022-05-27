import {CLEAR_CART, REMOVE, INCREASE, DECREASE, GET_TOTALS } from "./reduxVariables.js"

function reducer(state, action) {
  // if(action.type === CLEAR_CART) {
  //   return {
  //     ...state,
  //     cart: []
  //   }
  // }

  switch(action.type) {
    case CLEAR_CART: 
      return {...state, cart: [] }
    
    case DECREASE: 

      let tempCart = []
      tempCart = state.cart.map((cartItem) => {
        if(cartItem.id === action.payload.id) {
          cartItem = {...cartItem, amount: cartItem.amount - 1}
        }

        return cartItem;
      })

      return {
        ...state,
        cart: tempCart
      }

    case INCREASE:

      let tempCart1 = []
      tempCart1 = state.cart.map((cartItem) => {
          if(cartItem.id === action.payload.id) {
            cartItem = {...cartItem, amount: cartItem.amount + 1}
          }

          return cartItem;
        })

      return {
        ...state, 
        cart: tempCart1
      } 

    case REMOVE:

      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
      }

    case GET_TOTALS:
      let total_value = state.cart.reduce((acc, current) => {
        const {price, amount} = current 
        acc.amount = acc.amount + current.amount 
        acc.total = current.price * current.amount + acc.total
        return acc
      }, {
        total: 0,
        amount: 0
      })

      return {
        ...state,
        total: total_value.total,
        amount: total_value.amount
      }

    default: 
      return state 
  }
}

export default reducer;
