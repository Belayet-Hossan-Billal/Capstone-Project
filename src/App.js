import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
   Outlet
} from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Login from './component/Login/Login';
import Home from './pages/Home/Home';
import Register from './component/Register/Register';
import Footer from './component/Footer/Footer';
import Feature from './component/Feature/Feature';

const Layout=()=>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />
   
     
      
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children :[
     
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/register",
        element:<Register/>,
      },
      {
        path:"/features",
        element:<Feature/>,
      },
      {
        path:"/contact",
        element:<Footer/>,
      },
      
    ]
  },
   
 
]);

function App() {
  return (
    <div >
    <RouterProvider router={router} />
    
 </div>
  );
}

export default App;

 
