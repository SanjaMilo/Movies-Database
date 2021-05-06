import React from 'react';
import { useUserInfo } from '../../hooks/useUserInfo';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../actions/authActions';
import '../../styles/signInsignUp.css';

const SignUp = (props) => {
    const {auth, authError, signUp} = props; // destructuring props

    // useUserInfo() -> returns an object {value: value, handleInputChange: handleInputChange, resetField: resetField}
    const userEmail = useUserInfo(); 
    const userPassword = useUserInfo(); 
    const userFirstName = useUserInfo(); 
    const userLastName = useUserInfo(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userEmail, userPassword, userFirstName, userLastName);
        signUp({email: userEmail.value, password: userPassword.value, firstName: userFirstName.value, lastName: userLastName.value}); // state -> is the object 'newUser'
        // empty input fields
        userFirstName.resetField();
        userPassword.resetField();
        userFirstName.resetField();
        userLastName.resetField();
    };

     // When signed-in, than the user is redirected to the Home page and can search the movies database
    if (auth.uid) return <Redirect to='/' />

    return(
        <div className="SignIn">
            <form className="search sign-form" onSubmit={(e) => {handleSubmit(e)}}>
                    <h2 className="form-title">Sign up:</h2>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input value={userEmail.value} onChange={(e) => {userEmail.handleInputChange(e)}} className="form-control" type="email" id="email" placeholder="E-mail" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input value={userPassword.value} onChange={(e) => {userPassword.handleInputChange(e)}} className="form-control" type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First name</label>
                        <input value={userFirstName.value} onChange={(e) => {userFirstName.handleInputChange(e)}} className="form-control" type="text" id="firstName" placeholder="First name" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last name</label>
                        <input value={userLastName.value} onChange={(e) => {userLastName.handleInputChange(e)}} className="form-control" type="text" id="lastName" placeholder="Last name" />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn-search btn">Sign in</button>
                        <div className="colored-text">
                            { authError ? <p className="error-text">{authError}</p> : null }
                        </div>
                    </div>
                </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)) // we are returning a method signUp (that we want to attach to our props) that is going to make a dispatch, and the dispatch is going to call the action creator that we imported {signUp} form authActions, with the newUser passed in. And now we can call this returned - signUp method, from our component
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);