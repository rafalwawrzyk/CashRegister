import {connect} from 'react-redux';
import {compose} from 'redux';
import { removeItemAction,addItemAction,decreaseItemAction } from '../../redux/cart/cartActions';
import CheckoutItem from './checkoutItem'

const mapDispatchToProps = (dispatch) => ({
	removeItem: (elem) => dispatch(removeItemAction(elem)),
	addItemQuantity: (elem) => dispatch(addItemAction(elem)),
	removeItemQuantity: (elem) => dispatch(decreaseItemAction(elem))
});



const CheckoutItemContainer = compose(
    connect(null,mapDispatchToProps)
)(CheckoutItem)

export default CheckoutItemContainer;