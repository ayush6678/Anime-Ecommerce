import Login from "./component/User/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/User/SignUp";
import ForgotPassword from "./component/User/ForgetPassword";
import Home from "./component/Home/Home";
import Header from "./component/Layouts/Header1.jsx/Header";
import AboutUs from "./Terms&Condtions/Aboutus";
import ContactUs from "./Terms&Condtions/Contact";
import Footer from "./component/Layouts/Footer/Footer";
import TermsAndConditions from "./Terms&Condtions/TermsAndUse";
import Services from "./Terms&Condtions/Service";
import PrivacyPolicy from "./Terms&Condtions/Privacy";
import ReturnPolicyPage from "./Terms&Condtions/Return";

import "./App.css";
import Cart from "./component/Cart/Cart";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>


          <Route
            exact path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            } />
          <Route
            exact
            path="/login"
            element={
              <Login />
            }
          />

          <Route
            exact
            path="/signup"
            element={
              <SignUp />
            }
          />
          <Route
            exact path="/password/forgot"
            element={
              <ForgotPassword />
            } />

          <Route
            exact
            path="/cart"
            element={
              <>
                {<Header />}
                <Cart />
                <Services />
                {<Footer />}
              </>
            }
          />


          <Route
            exact
            path="/product/:id"
            element={
              <>
                {<Header />}
                <ProductDetails />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/products"
            element={
              <>
                {<Header />}
                <Products />
                <Services />
                {<Footer />}
              </>
            }
          />
          
          <Route
            path="/products/:keyword"
            element={
              <>
                {<Header />}
                <Products />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/about_us"
            element={
              <>
                {<Header />}
                <AboutUs />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/contact"
            element={
              <>
                {<Header />}
                <ContactUs />
                <Footer />

              </>
            }
          />

          <Route
            exact
            path="/policy/return"
            element={
              <>
                {<Header />}
                <ReturnPolicyPage />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/policy/Terms"
            element={
              <>
                {<Header />}
                <TermsAndConditions />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/policy/privacy"
            element={
              <>
                {<Header />}
                <PrivacyPolicy />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/terms/conditions"
            element={
              <>
                {<Header />}
                <TermsAndConditions />
                <Services />
                {<Footer />}
              </>
            }
          />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
