import './App.scss'
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App;
