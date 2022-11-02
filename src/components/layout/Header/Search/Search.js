import React from "react";

const Search = ({
	InputGroup,
	DropdownButton,
	Dropdown,
	Form,
	Button,
	SearchIcon,
}) => {
	return (
		<div className="search">
			<form>
				<InputGroup>
					<DropdownButton
						title="All"
						id="input-group-dropdown-3"
					>
						<Dropdown.Item href="#">Action</Dropdown.Item>
						<Dropdown.Item href="#">Another action</Dropdown.Item>
						<Dropdown.Item href="#">Something else here</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="#">Separated link</Dropdown.Item>
					</DropdownButton>
					<Form.Control
						type="text"
						aria-label="Text input with 2 dropdown buttons"
					/>
					<Button
						id="button-addon2"
						type="submit"
					>
						<img
							src={SearchIcon}
							alt="search icon"
							width={20}
						/>
					</Button>
				</InputGroup>
			</form>
		</div>
	);
};

export default Search;
