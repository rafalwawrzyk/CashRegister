import { StyledWrapper, CartItems,MessageForEmpty } from './styles';
import React from 'react';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';

const CartDropdown = ({ checkoutItems,history,dispatch,toggleHidden,...otherProps }) => {
	const customButtonHandler = () => {
		history.push('/checkout');
		toggleHidden();
	}
	
	return (
		<StyledWrapper>
			<CartItems>
			{checkoutItems.length ? checkoutItems.map((item) => 
				<CartItem item={item} key={item.id} />) : <MessageForEmpty> Koszyk jest pusty</MessageForEmpty>
			}
            </CartItems>
			<CustomButton onClick={customButtonHandler}>Podsumowanie</CustomButton>
		</StyledWrapper>
	);
};

export default CartDropdown;
