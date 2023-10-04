import './Loading.scss'
import { ClipLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className="loading">
            <ClipLoader
                color={'#4FC3C5'}
                size={100}
                aria-label="로딩중"
                data-testid="loader"
            />
        </div>
    );
};

export default Loading;