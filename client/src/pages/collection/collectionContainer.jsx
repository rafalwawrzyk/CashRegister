import Collection from './collection'
import {createStructuredSelector} from 'reselect'
import WithSpinner from '../../components/withSpinner/withSpinner'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
    loading:(state) => !selectIsCollectionLoaded(state)
})


// const CollectionContainer = connect(mapStateToProps)(WithSpinner(Collection))

const CollectionContainerPage = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default CollectionContainerPage;
