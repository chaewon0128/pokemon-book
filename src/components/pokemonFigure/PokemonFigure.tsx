import './PokemonFigure.scss';
import { addTagToNumber } from "../../utils/addTagToNumber";
import { IPokemonFigure } from '../../types';
import usePageNavigate from '../../hooks/usePageNavigate';


const PokemonFigure = ({ name, src, id, type }: IPokemonFigure) => {
    const { goToPage } = usePageNavigate();
    const onMoveDetail = (id: string) => {
        goToPage({ page: `/detail/${id}`, option: true });
    }
    return (
        <figure className={`pokemonInfo ${type}`} onClick={() => onMoveDetail && onMoveDetail(id)}>
            <img src={src} alt={`${name}의 이미지`} />
            <figcaption>{name}</figcaption>
            <span>{addTagToNumber(String(id))}</span>
        </figure>
    );
};

export default PokemonFigure;