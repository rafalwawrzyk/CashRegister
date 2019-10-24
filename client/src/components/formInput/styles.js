import styled from 'styled-components';

const colors = {
	subColor: 'grey',
	mainColor: 'black'
};

const shrinkMixin = (props) => {
	return `top: -14px;
        font-size: 12px;
        color: ${colors.mainColor};`;
};

export const Label = styled.label`
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	z-index: 1000;
	color: ${colors.subColor};
`;

export const Input = styled.input`
	background: none;
	background-color: white;
	color: ${colors.subColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${colors.subColor};
	margin: 25px 0;
	letter-spacing: ${(props) => (props.wider ? '0.3em' : null)};
	&:focus {
		outline: none;
	}
`;

export const StyledWrapper = styled.div`
	position: relative;
	margin: 45px 0;
	& ${Input}:focus + ${Label} {
		${shrinkMixin};
	}
`;
