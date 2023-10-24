import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { types } from '../auth/types'

export const NavBar = () => {
    const navigate = useNavigate();
    const {auth, dispatch} = useContext(AuthContext)
    const handleLogout = () => {
        dispatch({
            type: types.LOGOUT,
        })
        navigate('/login');

    }
    return(
        <div className="container-nav">
            <Link className="title" to="/dc">Asociaciones</Link>
            <div className="nav">
                <NavLink to="/dc">DC</NavLink>
                <NavLink to="/marvel">Marvel</NavLink>
                <NavLink to="/search">Search</NavLink>
            </div>
            <div className="nav-logout">
                <label>{auth.name}</label>
                <button className="btn-logout" to="/login" onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
    );
}