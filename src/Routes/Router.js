import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ProductDetail from "../Componants/Product/ProductDetail";
import About from "../Componants/About/About";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Order from "../Componants/Order/Order";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
     { 
      path: "/", 
      element: <Home/> 
      },
     { 
      path: "/about", 
      element: <About/> 
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
      path: "/order", 
      element: <Order /> 
      },
      {
      path: "/productDetail/:id",
      element: <ProductDetail /> ,
      loader:({params})=>{
        return fetch(`http://localhost:5000/product/${params.id}`)
      },
      },
      // { 
      // path: "/dashboard", 
      // element:<PrivateRoute><Dashboard /> </PrivateRoute>
      // },
    ],
  },

 
  {
    path:"/dashboard",
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
  }
]);
