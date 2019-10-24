import React from 'react';
import {
	StyledWrapper,
	CheckoutImageContainer,
	CheckoutImage,
	CheckoutName,
	CheckoutRemove,
	CheckoutQuantity,
	CheckoutPrice,
	CheckoutArrow,
	CheckoutValue
} from './styles';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, removeItem,addItemQuantity,removeItemQuantity }) => {
	const { imageUrl, name, quantity, price } = item;
	return (
		<StyledWrapper>
			<CheckoutImageContainer>
				<CheckoutImage alt="item" src={imageUrl} />
			</CheckoutImageContainer>
			<CheckoutName>{name}</CheckoutName>
			<CheckoutQuantity>
				<CheckoutArrow onClick={() => removeItemQuantity(item)}>&#10094;</CheckoutArrow>
				<CheckoutValue>{quantity}</CheckoutValue>
				<CheckoutArrow onClick={()=> addItemQuantity(item) }>&#10095;</CheckoutArrow>
			</CheckoutQuantity>
			<CheckoutPrice>{price * quantity} zł</CheckoutPrice>
			<CheckoutRemove onClick={() => removeItem(item)}>&#10005;</CheckoutRemove>
		</StyledWrapper>
	);
};



export default CheckoutItem
