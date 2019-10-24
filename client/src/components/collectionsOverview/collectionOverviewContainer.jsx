import CollectionsOverview from './collectionsOverview';
import WithSpinner from '../withSpinner/withSpinner';
import {createStructuredSelector} from 'reselect';
import {selectCollectionFetching} from '../../redux/shop/shop.selectors'

import {connect} from 'react-redux';
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
    loading:selectCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionOverviewContainer

// same as export const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
