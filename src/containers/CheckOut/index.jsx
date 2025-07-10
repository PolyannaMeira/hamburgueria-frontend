import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../config/stripeConfig';
import CheckOutForm from '../../components/Stripe/CheckOutForm';

/**
 * CheckOut Component
 *
 * - Receives Stripe clientSecret via react-router location state
 * - Redirects users back to cart if clientSecret is missing
 * - Wraps CheckOutForm in Stripe Elements for payment flow
 */
export function CheckOut() {
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Safely extract clientSecret using optional chaining
   */
  const clientSecret = location.state?.clientSecret;

  /**
   * Redirect users to /carrinho if they arrive without clientSecret
   * Prevents broken checkout sessions
   */
  useEffect(() => {
    if (!clientSecret) {
      navigate('/carrinho');
    }
  }, [clientSecret, navigate]);

  // Optionally render nothing during redirect
  if (!clientSecret) {
    return null;
  }

  /**
   * Render Stripe Elements for payment form
   */
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckOutForm>CheckOut</CheckOutForm>
    </Elements>
  );
}
