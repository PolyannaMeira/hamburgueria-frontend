import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks/index';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';

import { Router } from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={standardTheme}>
			<BrowserRouter>
				<AppProvider>
					<Elements stripe={stripePromise}>
						<Router />
					</Elements>
					<GlobalStyles />
					<ToastContainer autoClose={2000} theme="colored" />
				</AppProvider>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
);
