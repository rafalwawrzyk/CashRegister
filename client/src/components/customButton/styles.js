import styled,{css} from 'styled-components';

const signInStyles = `
    background-color:#4285f4;
`

const signInStylesHover = `
    background-color:#357ae8;
    color:white;
    border:none
`
const invertedStyles = `
	background-color:white;
	color:black;
	border:1px solid black;
`

const invertedHover = `
	background-color:black;
	color:white;
	border:none;
`


export const Button = styled.button`
    width:45%;
	min-width: 165px;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display:flex;
	justify-content:center;
	${props => props.isGoogleSignIn ? css`${signInStyles}` : ''};
	${props => props.inverted ? css`${invertedStyles}` : ''};

	&:hover {
		background-color: white;
		color: black;
		border:1px solid black;
		${props => props.isGoogleSignIn ? css`${signInStylesHover}` : ''}
		${props => props.inverted ? css`${invertedHover}` : ''}

		
 
	}
`;


