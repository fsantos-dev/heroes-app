import App from "../App";
import { DcPage } from './DcPage'
import { MarvelPage } from './MarvelPage'
import { HeroePage } from './HeroePage'
import { createBrowserRouter, Navigate, useLocation } from "react-router-dom";
import { LoginPage } from './LoginPage'
import { SearchPage } from "./SearchPage";
import { InicioPage } from "./InicioPage";
import { AuthContext } from "../auth/authContext";
import { useContext } from "react";

//forma 1
// export const PrivateRouter = ({ children }) => {
//     const {auth} = useContext(AuthContext);
//     console.log('paso 1:', auth)
//     if (auth.logged) {
//         return children
//     }
//     console.log('paso 2:', auth)
//     return <Navigate to="/login" />
// } element: <PrivateRouter><InicioPage/></PrivateRouter>,

//forma 2
export const PrivateRouter = ({ component: Component }) => {
    const { pathname } = useLocation();
    const {auth} = useContext(AuthContext);
    localStorage.setItem('lastPath', pathname);
    return (auth.logged ? <Component />:<Navigate to="/login"/>)
}

export const PublicRouter = ({component: Component}) => {
    const {auth} = useContext(AuthContext);
    return (!auth.logged ? <Component />:<Navigate to="/dc"/>)
}
export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRouter component={InicioPage}/>,
        children: [
            {
                path: "/dc",
                element: <DcPage />,
            },
            {
                path: "/marvel",
                element: <MarvelPage />,
            },
            {
                path: "/search",
                element: <SearchPage />,
            },
            {
                path: "/heroe/:id",
                element: <HeroePage />,
            },
        ],
    },
    {
        path: "/login",
        element: <PublicRouter component={LoginPage}/>,
    },
]);