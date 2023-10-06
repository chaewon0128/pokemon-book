import { ChangeEvent, FormEvent, useState } from 'react';
import './SearchForm.scss';
import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6';
import { useSetRecoilState } from 'recoil';
import { searchValueState } from '../../state/store';
import usePageNavigate from '../../hooks/usePageNavigate';

const SearchForm = () => {
    const [isResetButtonVisible, setIsResetButtonVisible] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('')
    const setSearchValue = useSetRecoilState(searchValueState);
    const { goToPage } = usePageNavigate();
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchInputValue(value);
        setIsResetButtonVisible(value.length > 0);
    }

    const onClearValue = () => {
        setSearchInputValue('');
        setIsResetButtonVisible(false);
    }
    const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        goToPage({ page: `/search/${searchInputValue}` });
        setSearchValue(searchInputValue)
        onClearValue();
    }

    return (
        <form className='searchForm' onSubmit={onSubmitSearch} id='searchForm'>
            <label className='sr-only' htmlFor='searchInput'>검색창</label>
            <input id='searchInput' placeholder="포켓몬 아이디를 입력해주세요" onChange={onChangeSearch} value={searchInputValue} />
            {isResetButtonVisible && <button className='resetButton' aria-label='초기화 버튼' onClick={onClearValue} type='reset'><FaXmark size={20} /></button>}
            <button className='searchButton' aria-label='검색 버튼' type='submit'><FaMagnifyingGlass size={20} /></button>
        </form>
    );
};

export default SearchForm;