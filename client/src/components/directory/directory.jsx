import React from 'react';
import { DirectoryMenu } from './styles';
import {Link} from 'react-router-dom'
import MenuItemContainer from '../menu-item/menuItemContainer';

const Directory = ({sections}) => {
	return (
		<DirectoryMenu>
			{sections.map(({ id,linkUrl, ...otherSectionProps }) => 
			<Link to={linkUrl}>
				<MenuItemContainer key={id} {...otherSectionProps} />
			</Link>
      )}
		</DirectoryMenu>
	);
};

export default(Directory);
