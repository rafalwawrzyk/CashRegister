import React from 'react';
import { StyledWrapper, Title, Preview } from './styles';
import CollectionItemContainer from '../collectionItem/collectionItemContainer';


const CollectionPreview = (props) => {

  const collectionItems = 
    props.items
    .filter((item, index) => index < 4)
    .map((item) => {
        return <CollectionItemContainer 
                  key={item.id} 
                  item={item} />;
	});

	return (
		<StyledWrapper>
			<Title onClick={() => props.history.push(`${props.match.path}/${props.routeName}`)}>{props.title}</Title>
			<Preview> 
				{collectionItems}
			</Preview>
		</StyledWrapper>
	);
};

export default CollectionPreview;
