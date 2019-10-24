import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

export const StyledWrapper = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
	user-select:none;
`;

export const ShoppingIcon = styled(Icon)`
  width: 24px;
    height: 24px;
`;
