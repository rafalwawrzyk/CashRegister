import actionTypes from './cartActionTypes'
import {addItemToCart,removeItemFromCart,removeItemQuantity} from './cartUtils'
const initialState = {
    hidden:true,
    cartItems:[]
}


const cartReducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN:
             return{
                ...state,
                 hidden:!state.hidden
             }
        case actionTypes.ADD_ITEM_TO_CART:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case actionTypes.REMOVE_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            }
        case actionTypes.DECREASE_ITEM_FROM_CHECKOUT_PAGE:
            return{
                ...state,
                cartItems:removeItemQuantity(state.cartItems, action.payload)
            }
        case actionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems:[]
            }
        default:
            return state;
    }
}


export default cartReducer;