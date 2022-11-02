import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
	Dropdown,
	InputGroup,
	DropdownButton,
	Form,
	Button,
	Offcanvas,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
// Images
import Logo from "../../../Assets/Images/Header/amazon_logo.png";
import Locate from "../../../Assets/Images/Header/navigation.png";
import USAFlag from "../../../Assets/Images/Header/usa-flag.png";
import CartIcon from "../../../Assets/Images/Header/cart.png";
import SearchIcon from "../../../Assets/Images/Header/search.png";
import sideIcon from "../../../Assets/Images/Header/menu.png";
// Header components
import Search from "./Search/Search";
import Address from "./Address/Address";
import Language from "./Language/Language";
import AccountsModal from "./Accounts/AcccoutsModal";
import Cart from "./Cart/Cart";
import SideMenu from "./SideMenu/SideMenu";
import MainNav from "./Nav/MainNav";

const Header = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1050px)",
	});
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<header className="header">
			{isDesktopOrLaptop ? (
				<div>
					<div className="menu">
						<NavLink
							activeclassname="logo-link"
							to="/home"
							className="logo-link"
						>
							<div className="logo">
								<img
									src={Logo}
									alt="Amazon_logo"
									className="amazon-logo"
									width={80}
								/>
							</div>
						</NavLink>
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
						<div className="return-orders">
							<NavLink
								activeclassname="active"
								to="/gp/order-history"
							>
								<span className="tp-title">Returns</span>
								<span className="bt-title">& Orders</span>
							</NavLink>
						</div>
						<Cart CartIcon={CartIcon} />
					</div>
					<div className="bottom-menu">
						<nav>
							<SideMenu
								Offcanvas={Offcanvas}
								show={show}
								handleClose={handleClose}
								handleShow={handleShow}
								Button={Button}
								sideIcon={sideIcon}
							/>
							<MainNav NavLink={NavLink} />
						</nav>
					</div>
				</div>
			) : (
				<div className="mobileTabletMenu"></div>
			)}
		</header>
	);
};

export default Header;
