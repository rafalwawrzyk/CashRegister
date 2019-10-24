import React from 'react';
import { StyledWrapper, ChekoutHeader, HeaderBlock,TotalPrice } from './styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItemContainer from '../../components/checkoutItem/checkoutItemContainer'

const CheckoutPage = ({ cartItems,itemsPrice }) => {
	return (
		<StyledWrapper>
			<ChekoutHeader>
				<HeaderBlock>
					<span>Produkt</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Opis</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Ilość</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Cena</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Usuń</span>
				</HeaderBlock>
			</ChekoutHeader>
            {
                cartItems.map(item => 
                    <CheckoutItemContainer item={item} key={item.id}/>
                    )
            }
            <TotalPrice>
                <span>Do zapłaty: {itemsPrice} zł </span>
            </TotalPrice>
		</StyledWrapper>
	);
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    itemsPrice:selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
