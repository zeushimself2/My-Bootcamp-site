import React from 'react';
import { usePaystackPayment } from 'react-paystack';

interface PaystackButtonProps {
  amount: 250000;
  email: 'fordjourfordjourbright@gmail.com';
  currency: 'GHS'; // Paystack expects currency in ISO 4217
  publicKey: 'pk_live_896c59c0e000569efe86de6d27b601a1730df0d8'; // Paystack public key
  onSuccess: (reference: any) => void;
  onClose: () => void;
}

const PaystackButton: React.FC<PaystackButtonProps> = ({ amount, email, onSuccess, onClose }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: 250 * 100,
    currency: 'GHS', // Paystack expects currency in ISO 4217
    publicKey: 'pk_live_896c59c0e000569efe86de6d27b601a1730df0d8',
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <button
      onClick={() => initializePayment(onSuccess, onClose)}
      style={{
        padding: '10px 20px',
        background: '#02a95c',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
      Register
    </button>
  );
};

export default PaystackButton;
