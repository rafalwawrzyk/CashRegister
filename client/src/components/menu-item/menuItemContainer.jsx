import MenuItem from './menuItem'
import { compose } from 'redux'
import {withRouter} from 'react-router-dom';


const MenuItemContainer = compose(
    withRouter
)(MenuItem)

export default MenuItemContainer;