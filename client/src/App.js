//react
import React,{useEffect} from 'react';

//styles
import GlobalStyle from './globalStyles';

//router
import {Route,Switch,Redirect} from 'react-router-dom'

//firebase
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

//redux
import {connect} from 'react-redux'
import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/userActions'

// reselect
import {createStructuredSelector} from 'reselect'

// pages
import SignInSignOut  from "./pages/signin-signout/signin-signout";
import ShopPage from './pages/shoppage/shoppage';
import HomePage from './pages/homepage/homepage'
import CheckoutPage from './pages/checkout/checkoutPage';

// components
import HeaderContainer from './components/header/headerContainer';


const App = ({checkUserSession,currentUser}) => {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession])

      return (
        <>
          <GlobalStyle/>
          <HeaderContainer/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/sklep" component={ShopPage} />
            <Route path="/checkout" exact component={CheckoutPage}/>
            {!currentUser ? <Route path="/signin" component={SignInSignOut}/> : <Redirect to="/"/> }
          </Switch>
        </>
      );
  
}


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession:() => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
