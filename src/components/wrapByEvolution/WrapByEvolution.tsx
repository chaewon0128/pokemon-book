import { useQuery } from "@tanstack/react-query";
import { getPokemonDetaiWithURL } from "../../api/getPokemon";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import { IPokemonData } from "../../types";
import './WrapByEvolution.scss';
import PokemonFigure from "../pokemonFigure/PokemonFigure";

const WrapByEvolution = ({ url }: IPokemonData) => {
  const { data: evolutionData } = useQuery(['evolution', url], () => getPokemonDetaiWithURL(url))

  // 진화 이름 배열 추출
  const firstEvolutionName = evolutionData?.data.chain.species.name;
  const secondEvolutionName = evolutionData?.data.chain.evolves_to[0]?.species.name;
  const thirdEvolutionName = evolutionData?.data.chain.evolves_to[0]?.evolves_to[0]?.species.name;

  const { pokemonDetail: firstEvolution } = usePokemonDetail(firstEvolutionName);
  const { pokemonDetail: secondEvolution } = usePokemonDetail(secondEvolutionName);
  const { pokemonDetail: thirdEvolution } = usePokemonDetail(thirdEvolutionName);


  return (
    <div className='evolution'>
      <h3>진화 과정</h3>
      <div className="evolutionContainer">
        <PokemonFigure name={firstEvolution.korean_name} src={firstEvolution?.data?.sprites.front_default} id={firstEvolution?.data?.id} type="evolution" />
        <PokemonFigure name={secondEvolution.korean_name} src={secondEvolution?.data?.sprites.front_default} id={secondEvolution?.data?.id} type="evolution" />
        <PokemonFigure name={thirdEvolution.korean_name} src={thirdEvolution?.data?.sprites.front_default} id={thirdEvolution?.data?.id} type="evolution" />
      </div>
    </div>
  );
};

export default WrapByEvolution;