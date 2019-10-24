import styled from 'styled-components';

export const StyledWrapper = styled.div`
	min-width: 220px;
	height: 230px;
	flex: auto;
	margin: 0 8px 8px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border: 1px solid black;
	position:relative;
	overflow:hidden;
	&:hover{
		cursor:pointer;
	}
	&:nth-child(4n + 1) {
		width: 0px;
	}
	&:nth-child(4n + 1):nth-child(4n + 2) {
		width: 325px;
	}
	&:nth-child(4n + 1):nth-child(4n + 3) {
		width: 180px;
	}
	&:nth-child(4n + 1):nth-child(4n + 4) {
		width: 380px;
	}
`;

export const Title = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

export const BackgroundWrapper = styled.div`
  	background-image:url(${props => props.imageUrl});
	background-size:cover;
	background-position:center;
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	${StyledWrapper}:hover & {
		transform:scale(1.1);
		transition:transform 6s cubic-bezier(0.25,0.45,0.45,0.95);
	}
`;

export const SubTitle = styled.h2`
	font-weight: lighter;
	font-size: 16px;
`;

export const Content = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: 1px solid black;
	background-color:#fff;
	opacity:0.7;
	${StyledWrapper}:hover & {
		opacity:0.9;
	}
`;
