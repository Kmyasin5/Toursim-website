import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Destinations from "./components/Destinations.js";
import Error from "./components/Error";

function App() {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path="/">
					<Main />
					<Destinations />
				</Route>

				<Route path="/Login">
					<Login />
				</Route>

				<Route path="/SignUp">
					<SignUp />
				</Route>

				<Route path="*">
					<Error />
				</Route>
			</Switch>

			<Footer />
		</Router>
	);
}

export default App;
