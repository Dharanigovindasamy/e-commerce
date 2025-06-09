import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Payment.css';

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || 0;

  const [paymentMode, setPaymentMode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [holderName, setHolderName] = useState('');

  const handleConfirm = () => {
    // Simulate payment process
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      navigate('/payment-success');
    } else {
      navigate('/payment-failure');
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p>Total Amount: <strong>${amount}</strong></p>
      <div>
        <label>Choose Payment Mode:</label>
        <select value={paymentMode} onChange={e => setPaymentMode(e.target.value)}>
          <option value="">Select</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
        </select>
      </div>
      {(paymentMode === 'credit' || paymentMode === 'debit') && (
        <div>
          <div>
            <label>Account Number:</label>
            <input
              type="text"
              value={accountNumber}
              onChange={e => setAccountNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Holder Name:</label>
            <input
              type="text"
              value={holderName}
              onChange={e => setHolderName(e.target.value)}
            />
          </div>
        </div>
      )}
      <button
        className="btn btn-primary mt-3"
        onClick={handleConfirm}
        disabled={!paymentMode || !accountNumber || !holderName}
      >
        Confirm Payment
      </button>
    </div>
  );
}
