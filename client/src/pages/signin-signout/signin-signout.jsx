import React from 'react';
import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';
import {StyledWrapper} from './styles'

const SignInSignOut = () => {
	return(
		<StyledWrapper>
				<SignIn />
				<SignUp/>
		</StyledWrapper>
	) 
};

export default SignInSignOut;
