import "./SignUp.css";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
	const history = useHistory();
	const [errorMessage, setErrorMessage] = useState("");
	const getInputValue = async (event) => {
		console.log(event);
		event.preventDefault();
		var email = document.getElementById("inputEmail").value;
		var password = document.getElementById("inputPassword").value;
		console.log(email + " " + password);
		const response = await axios({
			method: "post",
			url: "http://localhost:8080/signin",
			headers: {
				email: email,
				password: password,
			},
		});
		const data = response.data.toString();
		if (data.localeCompare("200") === 0) {
			console.log("true");

			history.push("/");
		} else {
			setErrorMessage("Awesome");
		}
	};

	return (
		<div className="bg-secondary vh-100">
			<Title />
			<NavBar />
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto align-self-center">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Login</h5>
								<form className="form-signin">
									<div className="form-label-group">
										<input
											type="email"
											id="inputEmail"
											className="form-control"
											placeholder="Email address"
											required
											autoFocus
										/>
										<label htmlFor="inputEmail">Email address</label>
									</div>

									<div className="form-label-group">
										<input
											type="password"
											id="inputPassword"
											className="form-control"
											placeholder="Password"
											required
										/>
										<label htmlFor="inputPassword">Password</label>
									</div>

									{/* <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                </div> */}
									{errorMessage && (
										<div
											className="alert alert-warning alert-dismissible fade show"
											role="alert"
										>
											<strong>Wrong Email/Password!</strong> Please check your
											login information.
										</div>
									)}
									<button
										className="btn btn-lg btn-primary btn-block text-uppercase"
										onClick={(event) => getInputValue(event)}
									>
										Login
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
