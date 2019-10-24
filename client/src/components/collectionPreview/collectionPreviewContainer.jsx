import {connect} from 'react-redux'
import { compose } from 'redux'
import collectionPreview from './collectionPreview'
import {withRouter} from 'react-router-dom';



const CollectionPreviewContainer = compose(
    withRouter
)(collectionPreview)


export default CollectionPreviewContainer;