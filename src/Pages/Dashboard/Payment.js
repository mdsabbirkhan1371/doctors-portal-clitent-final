import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js'
const Payment = () => {
    const [appointment, setAppointment] = useState({})
    const { id } = useParams();
    const url = `https://my-docorts-portal-site.herokuapp.com/booking/${id}`

    // for payment from stripe
    const stripePromise = loadStripe("pk_test_51LT9ImKwbZpCV7BW5R7E4wl5LbYqk0Q0Y0quvIMizOsBbqGjU3Ovsm8HGXBdkpOjY359F1l1Yu8KdnTSYJPlAopu00zGBGBvxB");

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
            })
    }, [url]);

    const { patientName, treatment, date, price, slot } = appointment;

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 ">

                <div class="card-body">
                    <p className='font-bold text-success'>Hello, {patientName}</p>
                    <h2 class="card-title">Please Pay For: {treatment}</h2>
                    <p>Your appointment : <span className='text-orange-700'> {date} </span>
                        At   {slot}
                    </p>
                    <p>Please Pay: ${price}</p>
                </div>

            </div>

            <div className='flex-shrink max-w-md shadow-2xl card w-50 bg-base-100'>
                <div className='card-body'>
                    {appointment.price && <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>}
                </div>
            </div>

        </div >
    );
};

export default Payment;