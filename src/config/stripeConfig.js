import {loadStripe} from '@stripe/stripe-js';   

const stripePromise = loadStripe('pk_test_51RHiYlQff5AlZb4dO4Bg1kHurkiF8CeLwmtePPvN3yYRG5y9x2i10jzcT6HbRrLVispVU3fpQClkxVvVNdPKgkjk00HgV4LWpQ');

export default stripePromise;