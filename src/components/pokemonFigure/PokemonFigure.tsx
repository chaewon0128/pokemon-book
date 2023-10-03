import './PokemonFigure.scss';
import { addTagToNumber } from "../../utils/addTagToNumber";
import { IPokemonFigure } from '../../types';


const PokemonFigure = ({ name, src, id, type, onMoveDetail }: IPokemonFigure) => {
    return (
        <figure className={`pokemon-info ${type}`} onClick={() => onMoveDetail && onMoveDetail(id)}>
            <img src={src} alt={`${name}의 이미지`} />
            <figcaption>{name}</figcaption>
            <span>{addTagToNumber(String(id))}</span>
        </figure>
    );
};

export default PokemonFigure;