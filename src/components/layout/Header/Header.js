import React from "react";
import { NavLink } from "react-router-dom";
import {
	Dropdown,
	InputGroup,
	DropdownButton,
	Form,
	Button,
} from "react-bootstrap";
// Images
import Logo from "../../../Assets/Images/Header/amazon_logo.png";
import Locate from "../../../Assets/Images/Header/navigation.png";
import USAFlag from "../../../Assets/Images/Header/usa-flag.png";
import CartIcon from "../../../Assets/Images/Header/cart.png";
import SearchIcon from "../../../Assets/Images/Header/search.png";
import Search from "./Search/Search";
import Address from "./Address/Address";
import Language from "./Language/Language";
import AccountsModal from "./Accounts/AcccoutsModal";
import Cart from "./Cart/Cart";

const Header = () => {
	return (
		<header className="header">
			<div className="menu">
				<div className="logo">
					<img
						src={Logo}
						alt="Amazon_logo"
						width={90}
					/>
				</div>
				<Address Locate={Locate} />
				<Search
					InputGroup={InputGroup}
					DropdownButton={DropdownButton}
					Dropdown={Dropdown}
					Form={Form}
					Button={Button}
					SearchIcon={SearchIcon}
				/>
				<Language USAFlag={USAFlag} />
				<AccountsModal />
				<div className="return-orders"></div>
				<Cart CartIcon={CartIcon} />
			</div>
			<nav>
				<ul>
					<li>
						<NavLink
							activeclassname="active"
							to="/home"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							activeclassname="active"
							to="/products"
						>
							Product
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
