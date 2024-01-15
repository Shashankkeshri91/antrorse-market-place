import Home from "./pages/HomePage/Home";
import OTP from "./Components/OTP";
import SignUp from "./pages/SignUpPage/SignUp";
import Login from "./pages/LoginPage/Login";
import SellerSignUp from "./pages/SellerSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Category from "./components/Catagories/Category";
import Wishlist from "./components/Wishlist/Wishlist";
import ProductFilterAndList from "./Components/ProductListList/ProductFilterAndList";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        {/* Category Page */}
        <Route
          path="/category"
          element={
            <>
              <Navbar />
              <Category />
              <Footer />
            </>
          }
        />
        {/* Wishlist Page */}
        <Route
          path="/wishlist"
          element={
            <>
              <Navbar />
              <Wishlist />
              <Footer />
            </>
          }
        />
        {/* Product Filter and List Page */}
        <Route
          path="/productfilterandlist"
          element={
            <>
              <Navbar />
              <ProductFilterAndList />
              <Footer />
            </>
          }
        />
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        {/* SignUp Page */}
        <Route path="/Signup" element={<SignUp />} />
        {/* OTP Page */}
        <Route path="/otp" element={<OTP />} />
        {/* SellerSignUp Page */}
        <Route path="/sellersignup" element={<SellerSignUp />} />
        {/* SellerSignUp Page without Navbar and Footer */}
        <Route
          path="/sellersignup-without-navbar-footer"
          element={<SellerSignUpWithoutNavbarFooter />}
        />
      </Routes>
    </Router>
  );
}

// Separate SellerSignUp component without Navbar and Footer
function SellerSignUpWithoutNavbarFooter() {
  return <SellerSignUp />;
}

export default App;

