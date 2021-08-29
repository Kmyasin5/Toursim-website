import React from "react";

const Footer = () => {
	return (
		<footer className="Footer">
			<ul>
				{/* Here we can use Link tag instead of button tag because if we give the
				Link tag here it won't tied with anything so if we use it, it will
				thrown a warning error, so we're using Button tag here*/}
				<li>
					<button>Home</button>
				</li>
				<li>
					<button>Privacy Policy</button>
				</li>
				<ul>
					<li>
						<button>Book your Tour day</button>
					</li>
					<li>
						<button>Give Away</button>
					</li>
				</ul>
			</ul>
		</footer>
	);
};

export default Footer;
