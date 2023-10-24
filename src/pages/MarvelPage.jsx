import { HeroList } from "../components/HeroList";
export const MarvelPage = () => {

    return (
        <>
            <h2>Marvel</h2>
            <hr />
            <HeroList publisher={'Marvel Comics'} />
        </>
    );
}