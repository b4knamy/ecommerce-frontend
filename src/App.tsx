import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home/index';
import Search from './components/search';
import Glasses from './components/glasses';
import Payment from './components/payment';
import User from './components/user/context/context';
import Page from './components/global/page';
import PaymentCheckOutStatus from './components/payment/status';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/partials/navbar/navbar';
import CheckoutResult from './components/partials/results/result';
import Footer from './components/partials/footer/footer';
import NoPageFound from './components/partials/noPageFound';

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page children={<Home />} />}></Route>
        <Route
          path="/pesquisa"
          element={<Page children={<Search />} />}
        ></Route>
        <Route
          path="/oculos/:slug"
          element={<Page children={<Glasses />} />}
        ></Route>
        <Route path="/pagamento/checkin" element={<Payment />}></Route>
        <Route
          path="/pagamento/checkout"
          element={<PaymentCheckOutStatus />}
        ></Route>
        <Route
          path="/usuario/:slug"
          element={<Page children={<User />} />}
        ></Route>
        <Route
          path="/checkout/result"
          element={<Page children={<CheckoutResult />} />}
        ></Route>
        <Route path="*" element={<NoPageFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait" initial={true}>
        <AppRoutes />
      </AnimatePresence>
    </BrowserRouter>
  );
}
