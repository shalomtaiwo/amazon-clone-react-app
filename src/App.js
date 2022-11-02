import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "./components/Home.js";
import Header from "./components/layout/Header/Header.js";
import ProductDetails from "./components/ProductDetails.js";
import Products from "./components/Products.js";

import "./Assets/SCSS/styles";

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Navigate to="/home" />}
				/>
				<Route
					path="/home"
					element={<Home />}
					exact
				/>
				<Route
					path="/ap/signin"
					element={<Home />}
					exact
				/>
				<Route
					path="/ap/register"
					element={<Home />}
					exact
				/>
				<Route
					path="/gp/account"
					element={<Home />}
					exact
				/>
				<Route
					path="/gp/order-history"
					element={<Home />}
					exact
				/>
				<Route
					path="/gp/cart"
					element={<Home />}
					exact
				/>
				<Route
					path="/gp/buy"
					element={<Home />}
					exact
				/>
				<Route
					path="/gp/order-history"
					element={<Home />}
					exact
				/>
				<Route
					path="/products"
					element={<Products />}
				/>
				<Route
					path="/gp/product/:id"
					element={<ProductDetails />}
				/>
			</Routes>
		</div>
	);
};

export default App;
