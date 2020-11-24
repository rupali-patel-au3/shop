import React, { useState } from 'react';

const HOME_GARDEN = 'home and garden';
const UTILITY = 'utility';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: HOME_GARDEN,
      name: ' Battery',
      cost: 2.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
    {
      category: HOME_GARDEN,
      name: 'Apparel',
      cost: 19.99,
      image:
        'https://www.personalisedhoodiesuk.co.uk/image/cache/catalog/customhoodiimage/1COLOURHOOD-800x800.jpg'
    },
    {
      category: HOME_GARDEN,
      name: 'Smart Phones',
      cost: 19.99,
      image:
        'https://static.compareindia.news18.com/compareindia/gallery/images/2018/mar/s9+_1_121041499061.jpg',
    },
    {
      category: HOME_GARDEN,
      name: 'Handbags',
      cost: 19.99,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81rh2BH71rL._UY500_.jpg',
    },
    {
      category: HOME_GARDEN,
      name: 'Watches',
      cost: 19.99,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61bTR1wJ9dL._UX522_.jpg',
    },
    {
      category: HOME_GARDEN,
      name: 'Blanket',
      cost: 19.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
      category: HOME_GARDEN,
      name: 'Home Decor',
      cost: 19.99,
      image:
        'https://i.pinimg.com/originals/9f/7e/0b/9f7e0bfc2a767abe1c3b62f28f662d3b.png',
	},
	{
		category: HOME_GARDEN,
		name: 'Electronics',
		cost: 19.99,
		image:
		  'https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMWIPRO-GARNETHOME399094C5B578A/1563032783863_2.jpg',
	  },
	  {
		category: HOME_GARDEN,
		name: 'Books',
		cost: 19.99,
		image:
		  'https://m.media-amazon.com/images/I/51O-3jAB68L.jpg',
	  }
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      {/* Select a category */}
      {/* <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select> */}
      <div className="row">
        {getProductsInCategory().map((product, idx) => (
          <div className="card-deck col-md-4" key={idx}>
			  <div className="card-body">
            <img className="img" src={product.image} alt={product.name} />
			
			<h6 class="card-title">{product.name}</h6>
            <h6 class="card-text">${product.cost}</h6>
            <button type="button" class="btn btn-dark" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
			</div>
            
          </div>
        ))}
      </div>
    </>
  );
}