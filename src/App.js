import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import axios from './helper/axios-config';

import House from './pages/House';
import getHouses from './data/houses';
import getBookings from './data/bookings';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import AddNewHouse from './pages/AddNewHouse';

import UpdateHouse from './pages/UpdateHouse';

import Admin from './pages/Admin';
import Home from './pages/Home';
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

  function loginAttempt() {
    axios
      .get('/auth/check-token')
      .then((res) => res.data)
      .then((user) => {
        dispatch({
          type: 'CONNECTION',
          payload: { userId: user.id, roleId: user.role_id },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (!userContext.isConnected) {
      loginAttempt();
    }
  }, []);

  useEffect(() => {
    getHouses(setHouses);
    getBookings(setBookings);
  }, []);

   if (houses) {
  return (
    <>
      <UserContextProvider value={{ ...userContext, dispatch }}>
        <Navigation />

        <Routes>
          {/* Connected User */}

          <Route path='/profil' element={<UserProfile />} />
          {/* Auth Routes */}
          <Route path='/se-connecter' element={<ConnectionModal />} />
          <Route path='/creation-compte' element={<SignUpForm />} />
          {/* Public Route */}
          <Route exact path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/qui-sommes-nous' element={<About />} />
          <Route
            path='/nos-maisons-forestieres'
            element={<Search houses={houses} />}
          />
          <Route path='/maison/:id' element={<House houses={houses} />} />

          {/* Admin Routes */}
          <Route path='/admin' element={<PrivateRoute role={ADMIN} />}>
            <Route
              path='dashboard'
              element={<Admin houses={houses} bookings={bookings} />}
            />

            <Route path='dashboard/maison/ajouter' element={<AddNewHouse setHouses={setHouses}/>} />
            <Route
              path='dashboard/mise-a-jour-maison/:id'
              element={<UpdateHouse setHouses={setHouses}/>}
            />
          </Route>
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}
}
export default App;
