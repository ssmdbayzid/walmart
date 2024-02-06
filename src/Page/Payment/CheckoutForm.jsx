import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";





export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const shippingAddress = JSON.parse(localStorage.getItem("shippingAddress"))
  const cart = useSelector((state)=> state.cart)

  const {user} = useAuth()

  useEffect(() => {
    if (!stripe) {
      return;
    }
   

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {

      switch (paymentIntent.status) {
        case "succeeded":
            localStorage.setItem("trans", paymentIntent.id)
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!shippingAddress){
      toast.error("Add shipping address")
      return
    }
    if(!user){
      alert("Please login")
      return
    }

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    try {
        const { paymentIntent, error } = await stripe.confirmPayment({
          elements,
          redirect: 'if_required',
          confirmParams: {
            return_url: "http://localhost:5173/payment-success", // Specify the confirm page URL
          },
        });
            
        if (error) {
          setMessage(error.message);
          setIsLoading(false);
          return;
        }
    
        // Assuming you have some order-related data to send to the backend
      
        // Send the order-related data and paymentIntent.id to your backend
        try {
          const response = await fetch("http://localhost:8000/api/v1/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tran_id: paymentIntent.id,
              email: user?.email,
              shippingAddress,              
              cart
            }),
          });
    
          if (response.ok) {
            // Store paymentIntent.id in localStorage
            localStorage.setItem("paymentIntentId", paymentIntent.id);
    
            // Redirect to the confirm page
            window.location.href = "http://localhost:5173/payment-success";
          } else {
            setMessage("Failed to complete the payment on the server.");
            setIsLoading(false);
          }
        } catch (err) {
          setMessage("An unexpected error occurred while communicating with the server.");
          setIsLoading(false);
        }
      } catch (confirmationError) {
        // Handle confirmation errors
        setMessage(confirmationError.message || "An unexpected confirmation error occurred.");
        setIsLoading(false);
      }
  };
  
  
  const paymentElementOptions = {
    layout: "tabs"
  }


  return (
    <form id="payment-form" className="payment-form" onSubmit={handleSubmit}>

      <PaymentElement className="bg-white border p-4" id="payment-element" options={paymentElementOptions} />
      <button className="block transition-all shadow-black shadow  py-2 mt-3 w-full text-white rounded text-lg font-semibold bg-[#5469d4] payment-form" disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <> <div className="spinner" id="spinner"></div> Pay now</> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">Message: {message}</div>}      
    </form>
  );
}