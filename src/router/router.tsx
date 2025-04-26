import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Login from "@/Authentication/login";
import AdminProfile from "@/Profile/AdminProfile";
import UserProfile from "@/Profile/UserProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/admin",
                element:<AdminProfile/>
            },
            {
                path:"/user",
                element:<UserProfile/>
            }
        ]
    }
])

export default router;