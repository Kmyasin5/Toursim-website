import React from "react";

const Login = () => {
	return (
		<>
			<section className="main login">
				<div className="overlay">
					<form className="form">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email address"
							required
						/>

						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							required
						/>
						<button type="submit">Log In</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Login;
