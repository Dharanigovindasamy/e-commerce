import React, { useContext } from 'react';
import { CartContext } from '../../store/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleConfirm = () => {
    clearCart();
    navigate('/payment', { state: { amount: totalAmount } });
  };

  const handleCancel = () => {
    navigate('/main');
  };

  if (cart.length === 0) {
    return <div className="cart-container"><h3>Your cart is empty.</h3></div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map((item, idx) => (
          <li key={idx} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-img" />
            <div>
              <h5>{item.name}</h5>
              <p>₹{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">Total: <strong>₹{totalAmount}</strong></div>
      <div className="cart-actions">
        <button className="btn btn-success" onClick={handleConfirm}>Confirm & Place Order</button>
        <button className="btn btn-outline-secondary" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}
