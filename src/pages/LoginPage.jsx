import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { types } from "../auth/types";
export const LoginPage = () => {
    let navegate = useNavigate();
    const {auth, dispatch} = useContext(AuthContext);
    console.log('prueba: ', auth);
    const hacerLogin = () => {
        dispatch({
            type: types.LOGIN,
            payload: { name: 'Felipe Santos' }
        });
        navegate(localStorage.getItem('lastPath'),{ replace: true })
    }



    return (
        <div className="container">
            <h1>Login</h1>
            <hr />
            <button className="btn-general" onClick={hacerLogin}>Login</button>
        </div>
    );
}