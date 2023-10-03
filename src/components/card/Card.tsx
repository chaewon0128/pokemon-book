import { FaXmark } from 'react-icons/fa6';
import './Card.scss';
import { useNavigate, useParams } from 'react-router-dom';
import usePokemonDetail from '../../hooks/usePokemonDetail';
import WrapByEvolution from '../wrapByEvolution/WrapByEvolution';
import PokemonFigure from '../pokemonFigure/PokemonFigure';
import PokemonAbility from '../pokemonAbility/PokemonAbility';



const Card = () => {
    const { id: pokemonId } = useParams();
    const navigate = useNavigate()
    const { pokemonDetail, isLoading } = usePokemonDetail(String(pokemonId));
    const onBackPage = () => {
        navigate(-1)
    }

    const evolutionChain = pokemonDetail?.evolution_chain?.url

    return (
        <section className='card'>
            {isLoading ? <div>is Loading..</div> :
                <>
                    <button className="xMarkBtn" onClick={onBackPage}>
                        <FaXmark size={30} />
                    </button>
                    <PokemonFigure type="information" name={pokemonDetail?.korean_name} src={pokemonDetail?.data.sprites.other['home']['front_default']} id={pokemonDetail?.data.id} />
                    <PokemonAbility info={pokemonDetail?.korean_info} />
                    {evolutionChain && <WrapByEvolution url={evolutionChain} />}
                </>
            }
        </section>
    );
};

export default Card;