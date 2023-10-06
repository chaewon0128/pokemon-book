import './Search.scss';
import { useRecoilValue } from "recoil";
import { searchValueState } from "../../state/store";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import { useParams } from "react-router-dom";
import PokemonFigure from "../../components/pokemonFigure/PokemonFigure";
import usePageNavigate from '../../hooks/usePageNavigate';
import Loading from '../../components/loading/Loading';

const Search = () => {
    const searchInput = useRecoilValue(searchValueState)
    const { pokemonDetail, isLoading, isError } = usePokemonDetail(searchInput);
    const { keyword } = useParams()
    const { goToPage } = usePageNavigate();
    const onMoveDetail = (id?: string) => {
        goToPage({ page: `/detail/${id}`, option: false });
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='searchResult'>
            {isError ? <h2> "{keyword}" 에 대한 검색 결과를 찾을 수 없습니다. </h2> :
                <>
                    <h2> "{keyword}" 에 대한 검색 결과 입니다. </h2>
                    <div className='searchItem'>
                        <PokemonFigure name={pokemonDetail?.korean_name} src={pokemonDetail?.data?.sprites.front_default} id={pokemonDetail?.data?.id} type='search' onMoveDetail={onMoveDetail} />
                    </div>
                </>
            }
        </section>
    );
};

export default Search;