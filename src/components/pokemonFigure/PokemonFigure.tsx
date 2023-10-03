import './PokemonFigure.scss';
import { addTagToNumber } from "../../utils/addTagToNumber";
import { IPokeminFigure } from '../../types';


const PokemonFigure = ({ name, src, id, type }: IPokeminFigure) => {
    return (
        <figure className={`pokemon-info ${type}`}>
            <img src={src} alt={`${name}의 이미지`} />
            <figcaption>{name}</figcaption>
            <span>{addTagToNumber(id)}</span>
        </figure>
    );
};

export default PokemonFigure;