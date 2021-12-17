import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import AddNewHouse from './pages/AddNewHouse';
import Admin from './pages/Admin';
import Home from './pages/Home';
import House from './pages/House';
import Search from './pages/Search';
import Services from './pages/Services';
import UserProfile from './pages/UserProfile';
import Navigation from './components/Navigation';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className='App'>

      <Navigation />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/NosMaisonsForestieres' element={<Search />} />
        <Route path='/Maison' element={<House />} />
        <Route path='/QuiSommesNous' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Administrateur' element={<Admin />} />
        <Route path='/Profil' element={<UserProfile />} />
        <Route path='/NouvelleMaison' element={<AddNewHouse />} />
      </Routes>
      <SignUpForm />
    </div>
  );
}

export default App;

