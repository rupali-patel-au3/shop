import React, { useState } from "react";
import "./HomePage.css";
import Products from "./Products";
import Cart from "./Cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const HomePage=()=> {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <div className="App">
		<div>
		<header>
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
				<li className="nav-item active">
				<a className="nav-link " href="/home">Home <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item active">
				<a className="nav-link" href="/about">About Us<span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item active">
				<a className="nav-link" href="/ContactUs">Contact Us <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item active">
				<a className="nav-link" href="/signIn">Sign In <span className="sr-only">(current)</span></a>
				</li>
				</ul>
			</div>
			<button className="btn btn-dark" onClick={() => navigateTo(PAGE_CART)}>
			<i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
			({getCartTotal()})
				</button>
			{/* <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button> */}
		</nav>
		<div class="jumbotron">
		<h2>My Shop</h2>
		</div>
		
      </header>
	  
		</div>
	 <div className="flex-container">
		  <div className="container1">
		  {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
		  </div>
		  <div className="container2">
		  {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
		  </div>
	  
	  </div> 
      
    </div>
  );
}

export default HomePage;
