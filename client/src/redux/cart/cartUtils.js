
export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existedItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existedItem){
        return cartItems.map(item => 
            item.id === cartItemToAdd.id ?
            {...item,quantity:item.quantity + 1} : item
            )
    }else{
        return [...cartItems, {...cartItemToAdd, quantity:1}]
    }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return [...cartItems.filter(item => item.id !== cartItemToRemove.id)]
}


export const removeItemQuantity = (cartItems,cartItemToRemove) => {
   const existingItem = cartItems.find(item => item.id === cartItemToRemove.id);

   if(existingItem.quantity === 1){
       return cartItems.filter(item => item.id !== existingItem.id)
   }
   else if(existingItem.quantity > 1){
    return cartItems.map(item => {
        if(item.id === cartItemToRemove.id){
            return {
                ...item,
                quantity:item.quantity - 1
            }
        }
        return item
    })
   }


   
}