import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';

import getHouses from './data/houses';
import getBookings from './data/bookings';

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
import SignUpForm from './components/SignUpForm';
import PrivateRoute from './components/auth/PrivateRoute';
import { ADMIN } from './constants/roles';
import {
  initialState,
  userContextReducer,
} from './reducers/userContextReducer';
import { UserContextProvider } from './contexts/user';

function App() {
  const [houses, setHouses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [userContext, dispatch] = useReducer(userContextReducer, initialState);

  useEffect(() => {
    getHouses(setHouses);
    getBookings(setBookings);
    console.log(houses);
  }, []);

  if (houses) {
    return (
      <>
        <UserContextProvider value={{...userContext, dispatch}}>
          <Navigation />

          <Global>
            <Routes>
              {/* Connected User */}
              <Route path='/Profil' element={<UserProfile />} />
              {/* Auth Routes */}
              <Route path='/SeConnecter' element={<ConnectionModal />} />
              <Route path='/CreationCompte' element={<SignUpForm />} />
              {/* Public Route */}
              <Route exact path='/' element={<Home />} />
              <Route path='/Services' element={<Services />} />
              <Route path='/QuiSommesNous' element={<About />} />
              <Route
                path='/NosMaisonsForestieres'
                element={<Search houses={houses} />}
              />
              <Route path='/Maison/:id' element={<House houses={houses} />} />

              {/* Admin Routes */}
              <Route path='/admin' element={<PrivateRoute role={ADMIN} />}>
                <Route
                  path='dashboard'
                  element={<Admin houses={houses} bookings={bookings} />}
                />
                <Route path='maison/ajouter' element={<AddNewHouse />} />
              </Route>
            </Routes>
          </Global>

          <Footer />
        </UserContextProvider>
      </>
    );
  }
}

export default App;
