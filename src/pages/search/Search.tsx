import './Search.scss';
import { useRecoilValue } from "recoil";
import { searchValueState } from "../../state/store";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import { useParams } from "react-router-dom";
import PokemonFigure from "../../components/pokemonFigure/PokemonFigure";
import usePageNavigate from '../../hooks/usePageNavigate';
import { Suspense } from 'react';
import Loading from '../../components/loading/Loading';

const Search = () => {
    const searchInput = useRecoilValue(searchValueState)
    const { pokemonDetail } = usePokemonDetail(searchInput);
    const { keyword } = useParams()
    const { goToPage } = usePageNavigate();
    const onMoveDetail = (id: string) => {
        goToPage({ page: `/detail/${id}`, option: false });
    }

    return (
        <section className="searchResult">
            <h2> "{keyword}" 에 대한 검색 결과 입니다. </h2>
            <Suspense fallback={<Loading />}>
                <div className='searchItem'>
                    <PokemonFigure name={pokemonDetail.korean_name} src={pokemonDetail?.data?.sprites.front_default} id={pokemonDetail?.data?.id} type='search' onMoveDetail={onMoveDetail} />
                </div>
            </Suspense>
        </section>
    );
};

export default Search;