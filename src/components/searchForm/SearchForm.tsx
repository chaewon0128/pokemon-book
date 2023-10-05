import { ChangeEvent, FormEvent, useState } from 'react';
import './SearchForm.scss';
import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6';
import { useSetRecoilState } from 'recoil';
import { searchValueState } from '../../state/store';
import usePageNavigate from '../../hooks/usePageNavigate';

const SearchForm = () => {
    const [isVisibleRestBtn, setIsVisibleResetBtn] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const setSearchValue = useSetRecoilState(searchValueState);
    const { goToPage } = usePageNavigate();
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        setIsVisibleResetBtn(value.length > 0);
    }

    const onClearValue = () => {
        setInputValue('');
        setIsVisibleResetBtn(false);
    }
    const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        goToPage({ page: `/search/${inputValue}` });
        setSearchValue(inputValue)
        onClearValue();
    }

    return (
        <form className='searchForm' onSubmit={onSubmitSearch} id='searchForm'>
            <label className='sr-only' htmlFor='searchInput'>검색창</label>
            <input id='searchInput' placeholder="포켓몬 이름을 입력해주세요" onChange={onChangeSearch} value={inputValue} />
            {isVisibleRestBtn && <button className='resetButton' onClick={onClearValue} type='reset'><FaXmark size={20} /></button>}
            <button className='searchButton' type='submit'><FaMagnifyingGlass size={20} /></button>
        </form>
    );
};

export default SearchForm;