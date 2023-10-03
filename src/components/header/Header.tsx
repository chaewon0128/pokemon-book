import './Header.scss';
import SearchForm from '../searchForm/SearchForm';


const Header = () => {

    return (
        <header className="header">
            <h1 className="h1">Pokemon Book</h1>
            <SearchForm />
        </header>
    );
};

export default Header;