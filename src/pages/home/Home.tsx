import './Home.scss';
import { useMatch } from "react-router-dom";
import Card from "../../components/card/Card";
import usePokemonList from '../../hooks/usePokemonList';
import PokemonItem from '../../components/pokemonItem/PokemonItem';
import { Suspense } from 'react';
import Loading from '../../components/loading/Loading';

const Home = () => {
    const { allPokemons, isFetchingNextPage, isPokemonNextPage, ref } = usePokemonList()
    const cardMatch = useMatch('/detail/:id')

    return (
        <>
            <main className="pokemonLists">
                <h2 className="sr-only">포켓몬 리스트</h2>
                <Suspense fallback={<Loading />}>
                    {allPokemons?.map((pokemons) => (
                        pokemons.data.results.map((result: { name: string }) => (
                            <PokemonItem key={result.name} name={result.name} />
                        ))
                    ))}
                </Suspense>
                <div ref={ref} className='fetching'>
                    {isFetchingNextPage && isPokemonNextPage ? <Loading /> : null}
                </div>
            </main>
            {cardMatch &&
                <>
                    <Suspense fallback={<Loading />}>
                        <Card />
                    </Suspense>
                    <div className='overlay' />
                </>
            }
        </>
    );
};

export default Home;

