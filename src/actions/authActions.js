import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS } from './actionTypes';

// Sign In Action Creator
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
      // Initialize firebase
      const firebase = getFirebase();
  
      // Login (sign in) If Correct Email and password
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          // Success
          dispatch({ type: SIGNIN_SUCCESS });
        })
        .catch((err) => {
          // Error
          dispatch({ type: SIGNIN_ERROR, err });
        });
    };
  };


// Sign Out Action Creator
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    // Initialize firebase
    const firebase = getFirebase();

    // Sign Out
    firebase.auth().signOut()
      .then(() => {
        // Success
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};


export const signUp = (newUser) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		const firestore = firebase.firestore(); 

		firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then((resp) => {
				// we don't want new auto-generated id, but the one that firebase auto-assigned to this user, so that we can sync the two up, and then set some properties inside that document using method set() and pass in an object
				return firestore
                .collection('users')
                .doc(resp.user.uid)
                .set({
					firstName: newUser.firstName,
					lastName: newUser.lastName,
					initials: newUser.firstName[0] + newUser.lastName[0]
				});
			})
			.then(() => {
				dispatch({ type: SIGNUP_SUCCESS });
			})
			.catch((err) => {
				dispatch({ type: SIGNUP_ERROR, err });
			});
	};
};