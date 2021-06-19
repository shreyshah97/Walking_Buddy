import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import ParksListPage from "./pages/ParksListPage";
import RegisterPage from "./pages/RegisterPage.js";
import SearchPage from "./pages/SearchPage.js";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route path="/Signup" component={SignUp} />
					<Route path="/Login" component={Login} />
					<Route path="/About" component={About} />
					<Route path="/ParksListPage" component={ParksListPage} />
					<Route path="/Register" component={RegisterPage} />
					<Route path="/Search" component={SearchPage} />
					{/* <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesListPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route component={NotFoundPage} /> */}
				</Switch>
			</Router>
		);
	}
}

export default App;
