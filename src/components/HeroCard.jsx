import { Link } from "react-router-dom";
export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
    return (
        <div className="col-4" style={{marginBottom: '25px'}}>
            <div className="container-all">
                <div className="img-container" >
                    <img src={`./src/assets/${id}.jpg`} alt={superhero} />
                </div>
                <div className="data" >
                    <div className="container-data">
                        <h4>{superhero}</h4>
                        <p>{alter_ego}</p>
                        {alter_ego !== characters ? <p>{characters}</p> : null}
                        <small>{first_appearance}</small>
                        <Link style={{display: 'block', paddingLeft: '0px'}} to={`/heroe/${id}`} >Mas...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}