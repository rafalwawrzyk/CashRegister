import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectOverviewItems} from '../../redux/shop/shop.selectors'
import {StyledWrapper} from './styles'
import CollectionPreviewContainer from '../collectionPreview/collectionPreviewContainer'

const CollectionsOverview = ({shopItems,...otherProps}) => {
	console.log('some other props',otherProps)
	return (
		<StyledWrapper>
			{shopItems.map(({ id, items, title, routeName }, index) => (
				<CollectionPreviewContainer key={id} items={items} title={title} routeName={routeName} />
			))}
		</StyledWrapper>
	);
};

const mapStateToProps = createStructuredSelector({
    shopItems:selectOverviewItems
})

export default connect(mapStateToProps)(CollectionsOverview);
