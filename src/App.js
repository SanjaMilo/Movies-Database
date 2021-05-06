// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './components/layout/NotFound';
import Home from './components/dashboard/Home';
import MoviesList from './components/movies/MoviesList';
import MovieDetails from './components/movies/MovieDetails';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import store from './store';
import { Provider, useSelector } from 'react-redux';
import ScrollToTop from './hooks/ScrollToTop';
// Firebase
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './config/fbConfig';
import { createFirestoreInstance } from 'redux-firestore';

function App() {
	// RRF (react-redux-firebase) Config
	const rrfConfig = {
		userProfile: 'users',
		useFirestoreForProfile: true
	};

	// React Redux Firebase - Props
	const rrfProps = {
		firebase,
		config: rrfConfig, // For setting up users,
		dispatch: store.dispatch,
		createFirestoreInstance
	};

	//Auth-Is-Loaded function
	function AuthIsLoaded({ children }) {
		const auth = useSelector((state) => state.firebase.auth);
		if (!isLoaded(auth)) return <div />;
		return children;
	}

	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<AuthIsLoaded>
					<Router>
						<ScrollToTop>
							<div className="App">
								<Navbar />
								<Switch>
									<Route exact path="/" render={(props) => <Home {...props} />} />
									<Route path="/signin" component={SignIn} />
									<Route path="/signup" component={SignUp} />
									<Route path="/movieslist" render={(props) => <MoviesList {...props} />} />
									<Route path="/moviedetails/:id" component={MovieDetails} />
									<Route component={NotFound} />
								</Switch>
								<Footer />
							</div>
						</ScrollToTop>
					</Router>
				</AuthIsLoaded>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
};

export default App;
