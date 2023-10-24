import { useMemo, useState } from "react";
import { HeroCard } from "../components/HeroCard";
import { heroes } from "../data/heroes";
import { useForm } from '../hooks/useForm'
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { getHeroesByName } from "../services/dataService";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const [value, setValue] = useForm({
        buscar: q
    });
    const { buscar } = value;

    const resultadoHeroes = useMemo(() => {
        return getHeroesByName(q);
    }, [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${buscar}`)
    }
    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>buscar</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input name="buscar" type="text" placeholder="find your hero" value={buscar} onChange={setValue} />
                        <button className="btn-general" type="submit">Buscar...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {q === '' ? 
                    <div>Realize una busqueda</div> : 
                    resultadoHeroes.length === 0 && q !== '' ? 
                    <div>No se encontraron resultados</div> : 
                    resultadoHeroes.map((heroe) => (
                        <HeroCard key={heroe.id} {...heroe} />
                    ))}
                </div>
            </div>
        </div>
    );
}