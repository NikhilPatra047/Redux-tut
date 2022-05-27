const DECREASE = "DECREASE"
const INCREASE = "INCREASE"
const CHANGE_NAME = "CHANGE_NAME"
const RESET = "RESET"
const CLEAR_CART = "CLEAR_CART"
const REMOVE = "REMOVE"
const GET_TOTALS = "GET_TOTALS"

//Action Creators 

export const removeItem = id => {
    return { type: REMOVE, payload: { id }}
}

export {INCREASE, DECREASE, RESET, CHANGE_NAME, CLEAR_CART, REMOVE, GET_TOTALS}
