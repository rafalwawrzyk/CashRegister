import {StyledWrapper,CartImage,ItemName,ItemPrice,ItemDetails} from './styles'
import React from 'react'



const CartItem = ({item:{imageUrl,price,name,quantity}}) => {
  return (
    <StyledWrapper>
      <CartImage src={imageUrl} alt="item"/>
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>{quantity} x ${price}</ItemPrice>
      </ItemDetails>
    </StyledWrapper>
  )
}

export default CartItem
