import React from "react";

const Cart = ({ CartIcon }) => {
	return (
		<div className="cart-Icon">
			<img
				src={CartIcon}
				alt="cart_icon"
				width={30}
			/>
			<span className="cart-count">{51}</span>
		</div>
	);
};

export default Cart;
