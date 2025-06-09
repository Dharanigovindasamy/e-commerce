import React, { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isLoggedIn()) {
      navigate('/login');
      return;
    }
    addToCart(product);
    navigate('/payment', { state: { amount: product.price } });
  };

  const handleBuyNow = () => {
    if (!isLoggedIn()) {
      navigate('/login');
      return;
    }
    navigate('/payment', { state: { amount: product.price, product } });
  };

  return (
    <div className="card h-100">
      {console.log('Rendering ProductCard for product:', product)}
      <img src={product.imageUrl || '/images/default-product.jpg'} alt={product.name} className="product-img" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>${product.price}</strong></p>
        <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
          <i className="bi bi-cart-plus"></i> Add to Cart
        </button>
        <button className="btn btn-secondary" onClick={() => handleBuyNow(product)}>
          Buy Now
        </button>
        </div>
      </div>
    </div>
  );
} 