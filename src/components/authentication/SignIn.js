import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../actions/authActions';
import '../../styles/signInsignUp.css';

const SignIn = (props) => {
    const {authError, auth, signIn} = props; // destructuring props
    // in this component, the custom hook 'useUserInfo' is not applied, just for comparison.
    const [userCred, setUserCred] = useState({
        email: "", 
        password: ""
    });

    const handleInputChange = (e) => {
        setUserCred({...userCred, [e.target.id]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userCred);
        signIn(userCred);
        setUserCred({email: "", password: ""}); // empty input fields
    };
    
    // When signed-in, than the user is redirected to the Home page and can search the movies database
    if (auth.uid) return <Redirect to='/' />

    return(
        <div className="SignIn">
            <form className="search sign-form" onSubmit={(e) => {handleSubmit(e)}}>
                    <h2 className="form-title">Sign in:</h2>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input value={userCred.email} onChange={(e) => {handleInputChange(e)}} className="form-control" type="email" id="email" placeholder="E-mail" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input value={userCred.password} onChange={(e) => {handleInputChange(e)}} className="form-control" type="password" id="password" placeholder="Password" />
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
        authError: state.auth.authError, // in rootReducer, property is stored as auth (authReducer), and in the authReducer it is authError
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

