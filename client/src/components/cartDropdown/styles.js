import styled from 'styled-components';

export const StyledWrapper = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	button {
		margin-top: auto;
		margin-left: auto;
		margin-right: auto;
		line-height: normal;
	}
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow:auto;

`;

export const MessageForEmpty = styled.span`
  font-size:18px;
  margin:50px auto;
`;