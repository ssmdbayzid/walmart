import React, { useEffect, useState } from 'react';
import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
    const stripe = useStripe();
    
    const [processing, setProcessing] = useState(false)
    const [transaction, setTransiction] = useState('')
    
    const [clientSecret, setClientSecret] = useState()        
    const element = useElements()

    const user = {
        email : "ssmd.bayzid",
        name: "S S Md. Bayzid"
    }
    
    
    useEffect(() => {
       
            axios.post('http://localhost:5000/create-payment-intent', { price: 200 })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                    console.log(res.data)
                })
    }, [])
    // console.log(clientSecret);

    // const items = {
    //     selUpID: _id, bookedClass, foreignLanguageName, price, languageImage, teacherName, StudentEmail
    // }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !element) return;

        const card = element.getElement(CardElement)
        if (card === null) return;

        setProcessing(true)
        // Use your card Element with other Stripe.js APIs
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setProcessing(false)
           alert(error.message)
        } else {
            setTransiction('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email || 'Unknown',
                        name: user.name || 'Anonymous',
                    },
                },
            },
        );
        if (confirmError) {
    
            alert(confirmError.message)
            
            setProcessing(false)
        }
        if (paymentIntent.status === 'succeeded') {
            setTransiction(paymentIntent.id)

            const payment = {
                email: user.email,
                name: user?.name,
                transictionId: paymentIntent.id,
                price: 50,
                status: 'Enrolled',
                quantity: 1,
                BookedId: cart.map(bookedID => bookedID.bookedClass),
                LanguageNames: cart.map(bookedItem => bookedItem?.foreignLanguageName)
            }
            // console.log(payment);
            console.log("payment", payment)
            setProcessing(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-full md:w-[60%] mx-auto'>
            <CardElement className='bg-base-100 p-5 rounded-2xl shadow-2xl'
                options={{
                    style: {
                        base: {
                            fontSize: '18px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='text-center'>

                <button type="submit" className='btn  border-2 border-[#f55400] text-[#f55400] mt-3 px-10 hover:bg-[#f55400] shadow-inherit hover:text-white' disabled={!stripe || !element}>
                    Pay
                </button>
            </div>
            {/* Show error message to your customers */}
            {
                transaction && <p className='mt-10 text-green-800'>Transiction is Successfully Done ,Transiction ID: <span className='text-[#835D23]'>{transaction}</span></p>
            }
        </form>
    );
};

export default CheckoutForm;