import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	background-color: #ececec;
`;
export const LogoLink = styled(Link)`
   height: 100%;
    width: 70px;
    padding: 25px;
`;



export const Options = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionsLink = styled(Link)`
    padding: 10px 15px;
    text-decoration:none;
`;

export const SignOutLink = styled.div`
	cursor: pointer;
	padding: 10px 15px;
`;
