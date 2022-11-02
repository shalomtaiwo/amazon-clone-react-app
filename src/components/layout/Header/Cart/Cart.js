import React from "react";

const Cart = ({ CartIcon }) => {
	return (
		<div className="cart-Icon">
			<img
				src={CartIcon}
				alt="cart_icon"
				width={40}
			/>
		</div>
	);
};

export default Cart;
