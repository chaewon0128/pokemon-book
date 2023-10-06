import { useQuery } from "@tanstack/react-query";
import { getPokemonDetaiWithURL } from "../../api/getPokemon";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import { IEvolutionDetail, IPokemonData } from "../../types";
import './WrapByEvolution.scss';
import PokemonFigure from "../pokemonFigure/PokemonFigure";
import Loading from "../loading/Loading";


const WrapByEvolution = ({ url }: IPokemonData) => {
  const { data: evolutionData, isLoading } = useQuery(['evolution', url], () => getPokemonDetaiWithURL(url));

  // 진화 이름 추출
  const firstEvolutionName = evolutionData?.data.chain.species.name;
  const secondEvolutionName = evolutionData?.data.chain.evolves_to[0]?.species.name;
  const thirdEvolutionName = evolutionData?.data.chain.evolves_to[0]?.evolves_to[0]?.species.name;

  const { pokemonDetail: firstEvolution } = usePokemonDetail(firstEvolutionName);
  const { pokemonDetail: secondEvolution } = usePokemonDetail(secondEvolutionName);
  const { pokemonDetail: thirdEvolution } = usePokemonDetail(thirdEvolutionName);

  const evolutions: IEvolutionDetail[] = [
    firstEvolution,
    secondEvolution,
    thirdEvolution,
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='evolution'>
      <h3>진화 과정</h3>
      <div className="evolutionContainer">
        {evolutions.map((evolutionName) =>
          evolutionName && (
            <PokemonFigure
              key={evolutionName.data?.id}
              name={evolutionName.korean_name || ""}
              src={evolutionName && evolutionName.data?.sprites.front_default || ""}
              id={evolutionName && evolutionName.data?.id || ""}
              type="evolution"
            />
          )
        )}
      </div>
    </div>
  );
};
export default WrapByEvolution;