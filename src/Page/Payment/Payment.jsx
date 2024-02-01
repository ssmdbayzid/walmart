import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './Payment.module.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx")

// (`pk_test_51ODQzkSE1wNzm1KdE9pfkilRgrdvFkX1O1pJPHAdGMUWo3JQrRLsL3UBfG7vOZvgfD4Io0YM10UYqqwX3o8H7SiD00XUjWPGqO`);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  

  const cart = useSelector((state)=> state.cart.cartItems)
  const navigate = useNavigate()
  
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if(cart.length > 0){
      
      fetch("http://localhost:8000/api/v1/orders/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [cart]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


  return (
    <div className="App flex justify-center my-3">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Payment