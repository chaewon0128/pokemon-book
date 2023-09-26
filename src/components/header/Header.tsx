import { useState } from 'react';
import './Header.scss';
const Header = () => {
    const [isVisibleSearchForm, setIsVisibleSearch] = useState(false)
    const onShowSearchForm = () => {
        setIsVisibleSearch(current => !current)
    }
    return (
        <header className="header">
            <h1 className="h1">Hello, Pokemon!</h1>
            <button className="magnify" onClick={onShowSearchForm}>
                돋보기 아이콘
            </button>
            {isVisibleSearchForm &&
                <form>
                    <fieldset>
                        <legend>검색창</legend>
                        <label>검색폼</label>
                        <input placeholder="포켓몬 이름을 입력해주세요" />
                        <button>검색</button>
                    </fieldset>
                </form>}

        </header>
    );
};

export default Header;