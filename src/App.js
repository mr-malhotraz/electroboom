import "./App.css";

import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Home from "./components/Home";
import ContactForm from "./components/contact";
import FaqPage from "./components/faq";
import MultiItemCarousel from "./components/categories";
import Products from "./components/Product";
// import { Home } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCartDemo from "./components/shoppingcart";
import Api from "./components/api";
import Offers from "./components/offers";
import LoginPage from "./components/login";
import RegistrationPage from "./components/registration";
import ContactUsPage from "./components/contactus";
import CheckoutPage from "./components/checkout";
import ProductDetails from "./components/product-details";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Carousel />
      <MultiItemCarousel />

      <Home />
      <Products />

      <ContactForm />
       */}
      <main>
        <section>
          <Router>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/offers" element={<Offers />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/Product" element={<Products />} />
              <Route exact path="/api" element={<Api />} />
              <Route exact path="/contactus" element={<ContactUsPage />} />
              <Route exact path="/faq" element={<FaqPage />} />
              <Route exact path="/checkout" element={<CheckoutPage />} />

              <Route
                exact
                path="/registration"
                element={<RegistrationPage />}
              />
              <Route
                exact
                path="/shoppingcart"
                element={<ShoppingCartDemo />}
              />
            </Routes>
            <Footer />
          </Router>
        </section>
      </main>
    </div>
  );
}

export default App;
