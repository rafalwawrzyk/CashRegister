import actionTypes from './cartActionTypes'

export const setVisibilityAction = () => ({
    type:actionTypes.TOGGLE_CART_HIDDEN,
})

export const addItemAction = item => ({
    type:actionTypes.ADD_ITEM_TO_CART,
    payload:item
})

export const removeItemAction = item => ({
    type:actionTypes.REMOVE_ITEM_FROM_CART,
    payload:item
})

export const decreaseItemAction = item => ({
    type:actionTypes.DECREASE_ITEM_FROM_CHECKOUT_PAGE,
    payload:item
})

export const increaseItemAction = item => ({
    type:actionTypes.INCREASE_ITEM_FROM_CHECKOUT_PAGE,
    payload:item
})

export const clearCart = () => ({
    type:actionTypes.CLEAR_CART
})