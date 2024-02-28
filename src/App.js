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
// import Route from "./component/Route/Route";
import { lazy } from "react";
// const LazyPayment = lazy(() => import("./component/Cart/Payment"));
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import OrderList from "./component/Admin/OrderList";
import UserList from "./component/Admin/UserList";
import UpdateProduct from "./component/Admin/UpdateProduct";
import ProcessOrder from "./component/Admin/ProcessOrder";
// import UpdateProduct from "./component/Admin/UpdateProduct";
import NewProduct from "./component/Admin/NewProduct";
import ProductReviews from "./component/Admin/ProductReviews";
const LazyProductReviews = lazy(() =>
  import("./component/Admin/ProductReviews")
);
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


          {/* private Routes */}

          <Route

            exact
            path="/admin/dashboard"
            element={<Dashboard />}
          />

          <Route

            exact
            path="/admin/products"
            element={<ProductList />}
          />
          <Route

            exact
            path="/admin/product/:id"
            element={<UpdateProduct />}
          />
          <Route

            exact
            path="/admin/reviews"
            element={<ProductReviews />}
          />
          <Route

            exact
            path="/admin/orders"
            element={<OrderList />}
          />
          <Route

            exact
            path="/admin/order/:id"
            element={<ProcessOrder />}
          />
          <Route

            exact
            path="/admin/new/product"
            element={<NewProduct />}
          />
          <Route

            exact
            path="/admin/users"
            element={<UserList />}
          />
          {/* <Route

            exact
            path="/admin/user/:id"
            element={UpdateUser}
          /> */}
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
