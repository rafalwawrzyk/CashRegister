import React from 'react';
import { StyledWrapper, ItemCount, ShoppingIcon } from './styles.js';


const CartIcon = ({ setCartVisible, itemsCounted }) => {
	return (
		<StyledWrapper onClick={() => setCartVisible()}>
			<ShoppingIcon />
			<ItemCount>{itemsCounted}</ItemCount>
		</StyledWrapper>
	);
};



export default CartIcon;
