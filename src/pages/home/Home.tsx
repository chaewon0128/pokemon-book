import './Home.scss';
import { useMatch } from "react-router-dom";
import Card from "../../components/card/Card";
import usePokemonList from '../../hooks/usePokemonList';
import PokemonItem from '../../components/pokemonItem/PokemonItem';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const Home = () => {
    const { ref, inView } = useInView();
    const { allPokemons, isFetchingNextPage, getPokemonNextPage, isPokemonNextPage } = usePokemonList()
    const cardMatch = useMatch('/detail/:id')


    useEffect(() => {
        if (inView && isPokemonNextPage) {
            getPokemonNextPage();

        }
    }, [inView])
    return (
        <>
            <main className="pokemonLists">
                <h2 className="sr-only">포켓몬 리스트</h2>
                {allPokemons?.map((result, index) => (
                    <PokemonItem key={index} name={result.name} url={result.url} />
                ))}
                <div ref={ref} />
            </main>
            {cardMatch &&
                <>
                    <Card />
                    <div className='overlay' />
                </>
            }
        </>
    );
};

export default Home;