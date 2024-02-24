import Login from "./component/User/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/User/SignUp";
import ForgotPassword from "./component/User/ForgetPassword";
import Home from "./component/Home/Home";
import Header from "./component/Layouts/Header1.jsx/Header";

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
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
