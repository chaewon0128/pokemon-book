import { useNavigate } from 'react-router-dom';
import { IUsePageNavigate } from '../types';


const usePageNavigate = () => {
    const navigate = useNavigate();

    const goToPage = ({ page, option }: IUsePageNavigate) => {
        navigate(page, { replace: option });
    };

    return { goToPage };
};

export default usePageNavigate;