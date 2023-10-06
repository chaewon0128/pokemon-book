import { FaXmark } from 'react-icons/fa6';
import './Card.scss';
import { useParams } from 'react-router-dom';
import usePokemonDetail from '../../hooks/usePokemonDetail';
import WrapByEvolution from '../wrapByEvolution/WrapByEvolution';
import PokemonFigure from '../pokemonFigure/PokemonFigure';
import PokemonAbility from '../pokemonAbility/PokemonAbility';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import usePageNavigate from '../../hooks/usePageNavigate';
import Loading from '../loading/Loading';

const Card = () => {
    useLockBodyScroll();
    const { id: pokemonId } = useParams();
    const { pokemonDetail, isLoading } = usePokemonDetail(String(pokemonId));
    const { goToPage } = usePageNavigate();
    const onBackPage = () => {
        goToPage({ page: '/', option: true });
    }
    const evolutionChain = pokemonDetail?.evolution_chain?.url

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='card'>
            <button className='xMarkBtn' onClick={onBackPage} type='button'>
                <FaXmark size={30} />
            </button>
            <PokemonFigure type='information' name={pokemonDetail?.korean_name} src={pokemonDetail?.data?.sprites.other['dream_world']['front_default']} id={pokemonDetail?.data?.id} />
            <PokemonAbility info={pokemonDetail?.korean_info} />
            {evolutionChain && <WrapByEvolution url={evolutionChain} />}
        </section>
    );
};

export default Card;