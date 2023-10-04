import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Search from '../pages/search/Search';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'detail/:id',
        element: <Home />,
      },
      {
        path: 'search/:keyword',
        element: <Search />,
      },
    ],
  },
]);