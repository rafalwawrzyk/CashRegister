import {createSelector} from 'reselect';



const selectCart = state => state.cartReducer;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)


export const selectCountedItems = createSelector(
    [selectCartItems],
    (selectCartItems) => selectCartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (selectCartItems) => selectCartItems.reduce((acc,item) => acc+(item.price * item.quantity) ,0)
)