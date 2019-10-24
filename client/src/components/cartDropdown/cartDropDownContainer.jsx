import {connect} from 'react-redux'
import {compose} from 'redux'

import CartDropdown from './cartDropdown';
import {selectCartItems,selectHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

import {setVisibilityAction} from '../../redux/cart/cartActions'

const mapStateToProps = createStructuredSelector({
    checkoutItems:selectCartItems,
    hidden:selectHidden
})

const mapDispatchToProps = (dispatch) => ({
	toggleHidden: () => dispatch(setVisibilityAction()) 
})

const CartDropDownContainer = compose(
    withRouter,
    connect(mapStateToProps,mapDispatchToProps)
)(CartDropdown)


export default CartDropDownContainer;