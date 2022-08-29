import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/index";
import All_products from "./Components/all_products";
import ProductDetails from "./Components/product_details";
import Login from "./Components/login";

// Taildwind CSS, Components & Icons
import './TailwindCss/tailwind.css';
// var dbConn  = require('./config/config'); 


function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/All-Products" element={<All_products />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}
function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
