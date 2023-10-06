import './PokemonItem.scss';
import usePokemonDetail from '../../hooks/usePokemonDetail';
import PokemonFigure from '../pokemonFigure/PokemonFigure';
import { IPokemonData } from '../../types';
import usePageNavigate from '../../hooks/usePageNavigate';



const PokemonItem = ({ name }: IPokemonData) => {
    const { pokemonDetail } = usePokemonDetail(name);
    const { goToPage } = usePageNavigate();
    const onMoveDetail = (id?: string) => {
        goToPage({ page: `/detail/${id}`, option: false });
    }
    return (
        <div className='pokemonItem'>
            <PokemonFigure name={pokemonDetail.korean_name} src={pokemonDetail?.data?.sprites.other['dream_world']['front_default']} id={pokemonDetail?.data?.id} type='main' onMoveDetail={onMoveDetail} />
        </div>
    );
};

export default PokemonItem;