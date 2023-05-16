import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/Login/Login";
import SignupPage from "./components/Signup/Signup";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import EditProduct from "./components/EditProduct/EditProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import ShippingDetails from "./components/ShippingDetails/ShippingDetails";

const userLoggedIn = true; // Replace with your logic to check if user is logged in
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {userLoggedIn && <Route exat path="/" element={<ProductPage />} />}
        {!userLoggedIn && <Route exat path="/" element={<LoginPage />} />}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ShippingDetails" element={<ShippingDetails />} />
        <Route path="/EditProduct" element={<EditProduct />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        {/* Other routes can be added here */}
      </Routes>
    </div>
  );
};

export default App;
