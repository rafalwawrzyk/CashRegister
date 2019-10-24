import {connect} from 'react-redux';
import {compose} from 'redux';
import CollectionItem from './collectionItem';
import { addItemAction } from '../../redux/cart/cartActions';


const mapDispatchToProps = (dispatch) => ({
    addItem:item => dispatch(addItemAction(item))
  })

const CollectionItemContainer = compose(
    connect(null,mapDispatchToProps)
)(CollectionItem)

export default CollectionItemContainer;