import React from 'react';
import { HomePageContainer } from './styles';
import DirectoryContainer from '../../components/directory/directoryContainer';
import Banner from '../../components/banner/banner';


const HomePage = () => (
	<div>
        <Banner/>
		<HomePageContainer>
			<DirectoryContainer />
		</HomePageContainer>
	</div>
);

export default HomePage;
