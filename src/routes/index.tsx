import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
  ]);

  export default routes;