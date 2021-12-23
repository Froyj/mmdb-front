import { Routes, Route } from 'react-router-dom';

import Global from './components/styled-components/Global';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import AddNewHouse from './pages/AddNewHouse';
import Admin from './pages/Admin';
import Home from './pages/Home';
import House from './pages/House';
import Search from './pages/Search';
import Services from './pages/Services';
import UserProfile from './pages/UserProfile';
import ConnectionModal from './components/ConnectionModal';

function App() {
  return (
    <>
      <Navigation />
      <Global>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/NosMaisonsForestieres' element={<Search />} />
          <Route path='/Maison/:id' element={<House />} />
          <Route path='/QuiSommesNous' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Administrateur' element={<Admin />} />
          <Route path='/Profil' element={<UserProfile />} />
          <Route path='/NouvelleMaison' element={<AddNewHouse />} />
          <Route path ='/SeConnecter' element={<ConnectionModal />} />
        </Routes>
      </ Global>
      <Footer />
    </>
  );
}

export default App;

