import React, { useEffect } from 'react';
import CollectionOverviewContainer from '../../components/collectionsOverview/collectionOverviewContainer';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import CollectionContainerPage from '../collection/collectionContainer';

const ShopPage = ({setCollection,match}) => {

	useEffect(() => {
		setCollection();
	},[setCollection]);
	return (
		<div>
			<Switch>
				<Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionContainerPage} />
			</Switch>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setCollection: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
