import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home';

const routes = createBrowserRouter([{
        path: '/',
        Component: Home
    }
]) 

export default routes;