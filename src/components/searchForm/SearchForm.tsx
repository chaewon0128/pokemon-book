import { ChangeEvent, useState } from 'react';
import './SearchForm.scss';
import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6';
const SearchForm = () => {
    const [isVisibleRestBtn, setIsVisibleResetBtn] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchValue(value);
        setIsVisibleResetBtn(value.length > 0);
    }
    const onSubmitSearch = () => {

    }

    return (
        <form className='searchForm' onSubmit={onSubmitSearch}>
            <label className='sr-only'>검색창</label>
            <input placeholder="포켓몬 이름을 입력해주세요" onChange={onChangeSearch} value={searchValue} />
            {isVisibleRestBtn && <button className='resetButton'><FaXmark size={20} /></button>}
            <button className='searchButton'><FaMagnifyingGlass size={20} /></button>
        </form>
    );
};

export default SearchForm;