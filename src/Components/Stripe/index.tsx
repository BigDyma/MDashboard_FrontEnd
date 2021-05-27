import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './_paymentForm';

const PUBLIC_KEY =
  'pk_test_51H5aB0FtyogbxfLU9ZQLNwpY29ZccUmWwXdFNIPSqVeN5EHEsU639SYYrVWTdwTCe22HLSca5GyPlliZTYMpIQtS00iQDCbhHk';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
