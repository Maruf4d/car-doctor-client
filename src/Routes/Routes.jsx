import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root/Root";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children :[
        {
            path : '/',
            element : <Home/>,
        },
      ],
    },
  ]);