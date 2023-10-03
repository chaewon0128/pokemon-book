import './PokemonAbility.scss';

interface IPokemonAbility {
  info: string,
}

const PokemonAbility = ({ info }: IPokemonAbility) => {
  return (
    <div className='ability'>{info} </div>
  );
};

export default PokemonAbility;