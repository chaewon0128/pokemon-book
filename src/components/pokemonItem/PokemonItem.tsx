import './PokemonItem.scss';
import usePokemonDetail from '../../hooks/usePokemonDetail';
import PokemonFigure from '../pokemonFigure/PokemonFigure';
import { useNavigate } from 'react-router-dom';
import { IPokemonData } from '../../types';



const PokemonItem = ({ name }: IPokemonData) => {
    const { pokemonDetail, isLoading } = usePokemonDetail(name);
    const navigate = useNavigate();
    const onMoveDetail = (id: string) => {
        navigate(`/detail/${id}`)
    }
    return (
        <div className='pokemonItem'>
            <PokemonFigure name={pokemonDetail.korean_name} src={pokemonDetail?.data?.sprites.front_default} id={pokemonDetail?.data?.id} type='evolution' onMoveDetail={onMoveDetail} />
        </div>
    );
};

export default PokemonItem;