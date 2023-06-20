import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/Home/About/About";
import Signup from "../Pages/Login/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ProductDetail from "../Componants/Product/ProductDetail";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
     { 
      path: "/", 
      element: <Home /> 
      },
     { 
      path: "/about", 
      element: <About /> 
      },
      { 
      path: "/login", 
      element: <Login /> 
      },
      { 
      path: "/signup", 
      element: <Signup /> 
      },
      {
      path: "/productDetail/:id",
      element: <ProductDetail /> ,
      loader:({params})=>{
        return fetch(`http://localhost:5000/product/${params.id}`)
      },
      },
      { 
      path: "/dashboard", 
      element:<PrivateRoute><Dashboard /> </PrivateRoute>
      },
    ],
  },
]);
