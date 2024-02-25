import Login from "./component/User/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/User/SignUp";
import ForgotPassword from "./component/User/ForgetPassword";
import Home from "./component/Home/Home";
import Header from "./component/Layouts/Header1.jsx/Header";
import AboutUs from "./Terms&Condtions/Aboutus";
import ContactUs from "./Terms&Condtions/Contact";
import Footer from "./component/Layouts/Footer/Footer";

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
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
