import React from "react";
import img01 from "../assessts/img01.jpg";
import img02 from "../assessts/img02.jpg";
import img03 from "../assessts/img03.jpg";

const Destinations = () => {
	return (
		<>
			<section className="grid">
				<h3>We are available in all the countries around the world</h3>
				<div className="grid-items">
					<div>
						<img src={img01} alt="" />
						<h1>Friends Tour</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Incidunt, pariatur itaque? Dignissimos, ipsa accusantium sequi
							cumque tempore aperiam fugiat, libero deserunt esse eveniet
							blanditiis
						</p>
					</div>

					<div>
						<img src={img02} alt="" />
						<h1>Office GetTogether</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Incidunt, pariatur itaque? Dignissimos, ipsa accusantium sequi
							cumque tempore aperiam fugiat, libero deserunt esse eveniet
							blanditiis
						</p>
					</div>

					<div>
						<img src={img03} alt="" />
						<h1>Family Trips</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Incidunt, pariatur itaque? Dignissimos, ipsa accusantium sequi
							cumque tempore aperiam fugiat, libero deserunt esse eveniet
							blanditiis
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Destinations;
