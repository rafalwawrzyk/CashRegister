import styled from 'styled-components';

export const BannerWrapper = styled.div`
	width: 100%;
	min-height: 600px;
	position: relative;
`;

export const BannerText = styled.div`
	width: 300px;
	height: 200px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		text-align: center;
	}
`;
