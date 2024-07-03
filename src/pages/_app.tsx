import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Provider, useDispatch } from 'react-redux';
import { store, setToken } from './store';
import Cookies from 'js-cookie';
import { ReactNode, useEffect } from 'react';

const queryClient = new QueryClient();

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      dispatch(setToken(token));
      // Здесь можно добавить любую логику, которая будет выполняться при наличии токена
    }
  }, [dispatch]);

  return children;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CartProvider>
          <AuthProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </AuthProvider>
        </CartProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
