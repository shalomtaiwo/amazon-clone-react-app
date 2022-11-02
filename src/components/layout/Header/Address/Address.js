import React from "react";

const Address = ({ Locate }) => {
	return (
		<div className="Address">
			<div className="locate">
				<img
					src={Locate}
					alt="user_location"
					width={25}
				/>
			</div>
			<div className="location">
				<span>Deliver to Shalom</span>
				<span>Cape Town 7460</span>
			</div>
		</div>
	);
};

export default Address;
