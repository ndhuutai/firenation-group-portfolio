import React, {Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap';
//custom components
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import LoginPage from './components/Login/LoginPage';
import Spacer from './components/spacer/Spacer';

import firebase from './firebase/firebase';
import AuthContext from './contexts/App/AuthContext';

import './styles/custom.scss';
import Projects from './components/Projects/Projects';
import SignUpPage from './components/Login/SignUp/SignUpPage';

class App extends Component {

	state = {
		user: null,
		//used to pass on the clicked element to close navbar
		clickedElement : null
	};

	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	//shallow check the user object
	// 	return this.state.user !== nextState.user;
	// }

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({user})
		})
	}

	onClickHandler = (e) => {
		this.setState({
			clickedElement: e.target
		})
	};

	render() {
		return (
			<div className="App vh-100" style={{width: '100%'}} onClick={this.onClickHandler}>
				<AuthContext.Provider value={{user: this.state.user}}>
					<BrowserRouter>
						<Layout>
							<Navigation {...this.state}/>
							<Switch>
								<Route path="/about" component={About}/>
								<Route path="/faq" component={FAQ}/>
								<Route path="/login" component={LoginPage}/>
								<Route path="/signup" component={SignUpPage}/>
								<Route path="/" component={Home}/>
							</Switch>
						</Layout>
					</BrowserRouter>
				</AuthContext.Provider>
			</div>
		);
	}
}
export default App;
