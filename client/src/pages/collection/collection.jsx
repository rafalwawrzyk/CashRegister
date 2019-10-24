import React from 'react';
import { StyledWrapper, CategoryTitle,CollectionItems,CollectionItemStyled } from './styles';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => {
  	const { title, items } = collection;
	return (
		<StyledWrapper>
			{ <CategoryTitle>{title}</CategoryTitle> }
      { <CollectionItems>
          {items.map((item) => <CollectionItemStyled item={item} key={item.id} />)}
      </CollectionItems> }
		</StyledWrapper>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
