import React from "react";

const SideMenu = ({ Offcanvas, show, handleClose, handleShow, Button, sideIcon }) => {
	return (
		<div className="side-menu">
            <div className="side-icon" onClick={handleShow}>
                <img src={sideIcon} alt="side icon" width={30} />
                <span>All</span>
            </div>

			<Offcanvas
				show={show}
				onHide={handleClose}
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the elements you
					have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default SideMenu;
