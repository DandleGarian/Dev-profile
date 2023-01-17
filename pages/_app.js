import Nav from '../components/Nav';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode='wait'>
      <Nav />
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
