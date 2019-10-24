import React from 'react'
import {StyledWrapper,
    CollectionItemImage,
    CollectionFooter,
    FooterName,
    FooterPrice} from './styles';
import CustomButton from '../customButton/customButton';

const CollectionItem = ({item,addItem}) => {

  const {name,price,imageUrl} = item;
  const newItem = {
    ...item,
    quantity:0
  }


  return (
    <StyledWrapper>
      <CollectionItemImage image={imageUrl}/>
      <CollectionFooter>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}</FooterPrice>
      </CollectionFooter>
      <CustomButton inverted={true} onClick={() => addItem(newItem)}>Dodaj do koszyka</CustomButton>
    </StyledWrapper>
  )
}




export default CollectionItem;