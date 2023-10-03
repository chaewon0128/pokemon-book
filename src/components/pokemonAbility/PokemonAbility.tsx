import { IPokemonData } from '../../types';
import './PokemonAbility.scss';

const PokemonAbility = ({ info }: IPokemonData) => {
  return (
    <div className='ability'>{info}</div>
  );
};

export default PokemonAbility;