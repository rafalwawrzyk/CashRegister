import CartIcon from './cartIcon';
import { connect } from 'react-redux';
import { setVisibilityAction } from '../../redux/cart/cartActions.js';
import {selectCountedItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'


const mapDispatchToProps = (dispatch) => {
	return {
		setCartVisible: () => dispatch(setVisibilityAction())
	};
};

const mapStateToProps = createStructuredSelector({
		itemsCounted: selectCountedItems
});

const CartIconContainer = compose(
    connect(mapStateToProps,mapDispatchToProps)
)(CartIcon)

export default CartIconContainer;