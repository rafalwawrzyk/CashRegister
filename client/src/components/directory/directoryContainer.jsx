import {connect} from 'react-redux'
import { compose } from 'redux'
import Directory from './directory'
import {selectDirectorySections} from '../../redux/directory/directorySelector'
import {createStructuredSelector} from 'reselect'

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})

const DirectoryContainer = compose(
    connect(mapStateToProps)
)(Directory)


export default DirectoryContainer;