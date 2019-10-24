import {connect} from 'react-redux'
import { compose } from 'redux'
import Header from './header'

import {createStructuredSelector} from 'reselect'
import {selectHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'



const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectHidden
})


const HeaderContainer = compose(
    connect(mapStateToProps)
)(Header)


export default HeaderContainer;