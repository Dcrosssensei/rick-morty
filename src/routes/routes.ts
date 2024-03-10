import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home';
import Details from '../pages/details/Details';

const routes = createBrowserRouter([{
        path: '/',
        Component: Home,
        children: [
            {
                path:'/:id',
                Component: Details
            }
        ]
    }
]) 

export default routes;