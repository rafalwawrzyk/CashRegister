import React, {useState} from 'react';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { StyledWrapper, Title, Subtitle } from './styles';
import {connect} from 'react-redux'
import {signUpStart} from '../../redux/user/userActions'

const SignUp = (props) => {
    const [userCredentials,setUserCredentials] = useState({
            displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;


	const handleSubmit = async (e) => {
        e.preventDefault();
        const {signUpWithEmail} = props;

        if(password !== confirmPassword){
            alert(`password don't match`)
            return;
        }

        signUpWithEmail({
            displayName,
            email,
            password
        })
    };

	const handleChange = (e) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]:e.target.value
            
        })
    };

		return (
			<StyledWrapper>
				<Title>Nie mam konta</Title>
				<Subtitle>Zarejestruj się</Subtitle>
				<form onSubmit={handleSubmit}>
                    <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    onChange={handleChange}
                    label="Imię"
                    required 
                    />
                     <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}
                    label="Email"
                    required 
                    />
                     <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    label="Hasło"
                    required
                    />
                     <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange} 
                    label="Potwierdź hasło"
                    required
                    />
                    <CustomButton type="submit">Rejestracja</CustomButton>
				</form>
			</StyledWrapper>
		);
	
}


const mapDispatchToProps = (dispatch) => ({
    signUpWithEmail: (user) => dispatch(signUpStart(user))
})

export default connect(null,mapDispatchToProps)(SignUp);
