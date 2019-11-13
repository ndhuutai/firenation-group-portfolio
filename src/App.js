import React, {Component, createRef} from 'react';
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
import DbContext from './contexts/App/DbContext';
import StorageContext from './contexts/App/StorageContext';

import './styles/custom.scss';
import SignUpPage from './components/Login/SignUp/SignUpPage';

class App extends Component {

	state = {
		user: null,
		//used to pass on the clicked element to close navbar
		clickedElement: null
	};

	navRef = createRef();
	collapsedRef = createRef();

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({user})
		})
	}

	onClickHandler = (e) => {
		if (this.collapsedRef.current.classList.contains('show') && !e.target.classList.contains('dropdown-toggle')) {
			this.navRef.current.click();
		}
	};

	render() {
		return (
			<div className="App vh-100" style={{width: '100%'}} onClick={this.onClickHandler}>
				<AuthContext.Provider value={{user: this.state.user}}>
					<BrowserRouter>
						<Layout>
							<Navigation navRef={this.navRef} collapsedRef={this.collapsedRef}/>
							<DbContext.Provider value={{dbConnection: firebase.database()}}>
								<StorageContext.Provider value={{storage: firebase.storage()}}>
									<div className="row mt-5 ml-0 mr-0">
										<div className="col align-self-center mt-5">
											<Switch>
												<Route path="/about" component={About}/>
												<Route path="/faq" component={FAQ}/>
												<Route path="/login" component={LoginPage}/>
												<Route path="/signup" component={SignUpPage}/>
												<Route path="/" component={Home}/>
											</Switch>
										</div>
									</div>
								</StorageContext.Provider>
							</DbContext.Provider>
						</Layout>
					</BrowserRouter>
				</AuthContext.Provider>
			</div>
		);
	}
}

export default App;
