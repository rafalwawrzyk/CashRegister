import React from 'react';
import { StyledWrapper, FormTitle, FormSubTitle, SignInForm, ButtonsWrapper } from './styles';
import Input from '../formInput/formInput';
import CustomButton from '../customButton/customButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignIn = ({emailSignInStart}) => {

	const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });

	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = (e) => {
		setUserCredentials({
			...userCredentials,
			[e.target.name]: e.target.value
		});
	};

	return (
		<StyledWrapper>
			<FormTitle>Mam już konto</FormTitle>
			<FormSubTitle>Zaloguj się przez email i hasło</FormSubTitle>

			<SignInForm onSubmit={handleSubmit}>
				<Input
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="email"
				/>
				<Input
					name="password"
					type="password"
					wider
					value={password}
					handleChange={handleChange}
					label="hasło"
				/>
				<ButtonsWrapper>
					<CustomButton type="submit">Zaloguj</CustomButton>
					<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn={true}>
						Google
					</CustomButton>
				</ButtonsWrapper>
			</SignInForm>
		</StyledWrapper>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
