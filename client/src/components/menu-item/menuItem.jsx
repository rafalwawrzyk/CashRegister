import React from 'react';
import { StyledWrapper, Content, Title, SubTitle,BackgroundWrapper } from './styles';

const MenuItem = ({title,imageUrl, history,linkUrl,match}) => {
	return (
		<StyledWrapper onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<BackgroundWrapper imageUrl={imageUrl}/>
			<Content>
				<Title>{title.toUpperCase()}</Title>
				<SubTitle>Zobacz</SubTitle>
			</Content>
		</StyledWrapper>
	);
};

export default MenuItem;
