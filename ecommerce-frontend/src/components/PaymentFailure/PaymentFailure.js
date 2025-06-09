import React from 'react';
import './PaymentFailure.css';  

export default function PaymentFailure() {
  return (
    <div className="container mt-5">
      <h2>Payment Failed</h2>
      <p>There was an issue processing your payment. Please try again.</p>
    </div>
  );
}
