import React from 'react';
import {StyledWrapper,LogoLink,Options,OptionsLink,SignOutLink} from './styles'

import {auth} from '../../firebase/firebase.utils'

import CartDropDownContainer from '../cartDropdown/cartDropDownContainer';
import CartIconContainer from '../cartIcon/cartIconContainer';
import {connect} from 'react-redux';

import {signOutStart} from '../../redux/user/userActions.js';

const Header = ({currentUser,hidden,signOutStart}) => {
  return (
    <StyledWrapper>
        <LogoLink to="/">
            <h2>LOGO</h2>
        </LogoLink>
        <Options>
            <OptionsLink to="/sklep">
                SKLEP
            </OptionsLink>
            <OptionsLink to="/kontakt">
                KONTAKT
            </OptionsLink>
            {
                currentUser 
                ? 
                <SignOutLink onClick={signOutStart}>WYLOGUJ</SignOutLink>
                :
                <OptionsLink to="/signin">
                    ZALOGUJ
                </OptionsLink>
            }
            <CartIconContainer/>
        </Options>
        {hidden ? null : <CartDropDownContainer/> }
        
    </StyledWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
    signOutStart:() => dispatch(signOutStart())
})


export default connect(null,mapDispatchToProps)(Header)
