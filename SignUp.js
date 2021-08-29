import React from "react";

const SignUp = () => {
	return (
		<>
			<section className="main login">
				<div className="overlay">
					<form className="form">
						<input
							type="text"
							name="UserName"
							id="username"
							placeholder="UserName"
							required
						/>
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

						<input
							type="password"
							name="password2"
							id="password2"
							placeholder="Confirm your password"
							required
						/>
						<button type="submit">Create Your Account</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default SignUp;
