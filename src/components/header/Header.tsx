import './Header.scss';
import SearchForm from '../searchForm/SearchForm';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <h1>
                <Link to='/' replace={true} className='h1'>Pokemon Book</Link>
            </h1>
            <SearchForm />
        </header>
    );
};

export default Header;