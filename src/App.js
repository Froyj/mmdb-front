import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import axios from './helper/axios-config';
import getHouses from './api/houses';
import getBookings from './api/bookings';


import Home from './pages/Home';
import HouseList from './pages/HouseList';
import HouseDetails from './pages/HouseDetails';
import About from './pages/static/About';
import Services from './pages/static/Services';

import UserProfile from './pages/UserProfile';

import Admin from './pages/admin/Admin';
import AddNewHouse from './pages/admin/AddNewHouse';
import UpdateHouse from './pages/admin/UpdateHouse';
import BookingDetails from './pages/admin/BookingDetails';


import ConnectionModal from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/auth/PrivateRoute';
import { ADMIN } from './constants/roles';
import {
  initialState,
  userContextReducer,
} from './reducers/userContextReducer';
import { UserContextProvider } from './contexts/user';
import ModalContext from './contexts/modal';
import BookingContextProvider from './contexts/Booking/BookingContextProvider';

import Layout from './components/layout/Layout';
import ContactModal from './components/ContactModal';

Modal.setAppElement('#root');

function App() {
  const [houses, setHouses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [userContext, dispatch] = useReducer(userContextReducer, initialState);
  const [openModal, setOpenModal] = useState(false);

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
      <GlobalContainer>
        <UserContextProvider value={{ ...userContext, dispatch }}>
          <BookingContextProvider>
            <ModalContext.Provider value={{ openModal, setOpenModal }}>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route exact path='/' element={<Home />} />
                  <Route path='/creation-compte' element={<SignUp />} />
                  <Route path='/se-connecter' element={<ConnectionModal />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/qui-sommes-nous' element={<About />} />
                  <Route
                    path='/nos-maisons-forestieres'
                    element={<HouseList houses={houses} />}
                  />
                  <Route path='/maison/:id' element={<HouseDetails />} />
                  <Route path='/profil' element={<UserProfile />} />
                </Route>
                <Route
                  path='/admin'
                  element={
                    <PrivateRoute role={ADMIN}>
                      <Layout />
                    </PrivateRoute>
                  }
                >
                  <Route
                    path='dashboard'
                    element={
                      <Admin
                        houses={houses}
                        bookings={bookings}
                        setHouses={setHouses}
                      />
                    }
                  />
                  <Route
                    path='dashboard/maison/ajouter'
                    element={<AddNewHouse setHouses={setHouses} />}
                  />
                  <Route
                    path='dashboard/mise-a-jour-maison/:id'
                    element={<UpdateHouse setHouses={setHouses} />}
                  />
                  <Route
                    path='dashboard/details-reservation/:bookingId'
                    element={<BookingDetails />}
                  />
                </Route>
              </Routes>
              <ContactModal />
            </ModalContext.Provider>
          </BookingContextProvider>
        </UserContextProvider>
      </GlobalContainer>
    );
  }
}
export default App;

const GlobalContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
