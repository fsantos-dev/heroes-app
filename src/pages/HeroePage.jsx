import { useParams } from "react-router-dom";
import React, { useEffect, useMemo } from 'react';
import { getHeroesById } from "../services/dataService";
import { useNavigate } from "react-router-dom";
export const HeroePage = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    let heroe = useMemo(()=>{return getHeroesById(id);},[id])

    useEffect(() => {
        if (!heroe) {
            return navigate('/marvel');
        }
    }, []);

    return (
        <>
            <h4>Heroe</h4>
            <hr />
            <div className="row">
                <div className="col-3 animate__animated animate__fadeInLeft">
                    <img style={{ width: '100%' }} src={`../src/assets/${id}.jpg`} alt={heroe?.superhero} />
                </div>
                <div className="data-id-heroe col-9">
                    <h3>{heroe?.superhero}</h3>
                    <ul>
                        <li><b>Alter Ego: </b>{heroe?.alter_ego} prueba</li>
                        <li className="publisher"><b>Publisher: </b>{heroe?.publisher}</li>
                        <li><b>First appearance: </b>{heroe?.first_appearance}</li>
                        <li><b>Characters: </b>{heroe?.characters}</li>
                    </ul>
                    <button style={{ marginTop: '10px' }} className="btn-general transparent" onClick={()=>navigate(-1)}>Regresar</button>
                </div>

            </div>
        </>

    );
}