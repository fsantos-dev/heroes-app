import { HeroList } from "../components/HeroList";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
export const DcPage = () => {
    const prueba = useContext(AuthContext);
    console.log('prueba: ', prueba);
    return(
        <>
            <h2>Dc</h2>
            <hr/>
            <HeroList publisher={'DC Comics'}/>
        </>
    );
}