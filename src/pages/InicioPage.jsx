import { NavBar } from '../components/NavBar'
import { Outlet } from "react-router-dom";
export const InicioPage = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Outlet />
            </div>
        </>
    );
}