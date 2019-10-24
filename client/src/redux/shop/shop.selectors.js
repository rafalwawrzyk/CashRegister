import { createSelector } from 'reselect';

export const selectItems = (state) => state.shopReducer;

export const selectShopItems = createSelector([ selectItems ], (items) => items.collections);

export const selectCollection = (collectionUrlParam) =>
	createSelector(
		[ selectShopItems ], 
		(collections) => collections ?  collections[collectionUrlParam] : null);

export const selectOverviewItems = createSelector(
	[ selectShopItems ], 
	(items) => items ? Object.keys(items).map((key) => items[key]) : []
);

export const selectCollectionFetching = createSelector(
	[selectItems],
	(items) => items.isFetching

)

export const selectIsCollectionLoaded = createSelector(
	[selectItems],
	(items) => !!items.collections
)
