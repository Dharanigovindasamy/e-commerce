import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';  

export default function Cart() {
  const navigate = useNavigate();
  const totalAmount = 0;

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { amount: totalAmount } });
  };

  return (
    <div>
      {/* ... your cart items ... */}
      <div>
        <p>Total: ${totalAmount}</p>
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
}
