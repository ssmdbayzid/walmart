import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './Payment.css'
// const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);
const stripePromise = loadStripe(`pk_test_51ODQzkSE1wNzm1KdE9pfkilRgrdvFkX1O1pJPHAdGMUWo3JQrRLsL3UBfG7vOZvgfD4Io0YM10UYqqwX3o8H7SiD00XUjWPGqO`);
const Payment = () => {
  return (
    <div 
    style={{width: '100%'}}
    >
        <Elements stripe={stripePromise}>
        <CheckoutForm />
        </Elements>
      </div>
  )
}

export default Payment