import React from "react";

const MainNav = ({ NavLink }) => {
	return (
		<ul className="nav">
			<li>
				<NavLink
					activeclassname="active"
					to="/products"
				>
					Today's Deals
				</NavLink>
			</li>
			<li>
				<NavLink
					activeclassname="active"
					to="/gp/help"
				>
					Customer Service
				</NavLink>
			</li>
            <li>
				<NavLink
					activeclassname="active"
					to="/registry"
				>
					Registry
				</NavLink>
			</li>
            <li>
				<NavLink
					activeclassname="active"
					to="/gift-cards"
				>
					Gift Cards
				</NavLink>
			</li>
            <li>
				<NavLink
					activeclassname="active"
					to="/gp/signin"
				>
					Sell
				</NavLink>
			</li>
		</ul>
	);
};

export default MainNav;
