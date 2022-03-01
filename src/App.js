import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "./helper/axios-config";
import colors from "./components/styled-components/colors";

import House from "./pages/House";
import getHouses from "./data/houses";
import getBookings from "./data/bookings";

import Footer from "./components/Footer";
import FilledButton from "./components/styled-components/FilledButton";
import About from "./pages/About";
import AddNewHouse from "./pages/Admin/AddNewHouse";

import UpdateHouse from './pages/Admin/UpdateHouse';

import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Services from "./pages/Services";
import UserProfile from "./pages/UserProfile";
import ConnectionModal from "./components/ConnectionModal";
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import { ADMIN } from "./constants/roles";
import {
  initialState,
  userContextReducer,
} from "./reducers/userContextReducer";
import { UserContextProvider } from "./contexts/user";
import ModalContext from "./contexts/modal";
import BookingContextProvider from "./contexts/Booking/BookingContextProvider";
import BookingDetails from "./pages/Admin/BookingDetails";

Modal.setAppElement("#root");

function App() {
  const [houses, setHouses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [userContext, dispatch] = useReducer(userContextReducer, initialState);
  const [openModal, setOpenModal] = useState(false);

  function loginAttempt() {
    axios
      .get("/auth/check-token")
      .then((res) => res.data)
      .then((user) => {
        dispatch({
          type: "CONNECTION",
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
          <BookingContextProvider>
            {/* <Navigation /> */}
            <Routes>
              {/* Connected User */}

              <Route path="/profil" element={<UserProfile />} />
              {/* Auth Routes */}
              <Route path="/se-connecter" element={<ConnectionModal />} />
              <Route path="/creation-compte" element={<SignUpForm />} />
              {/* Public Route */}
              <Route exact path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/qui-sommes-nous" element={<About />} />
              <Route
                path="/nos-maisons-forestieres"
                element={<Search houses={houses} />}
              />
              <Route path="/maison/:id" element={<House />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<PrivateRoute role={ADMIN} />}>
                <Route
                  path="dashboard"
                  element={
                    <Admin
                      houses={houses}
                      bookings={bookings}
                      setHouses={setHouses}
                    />
                  }
                />
                <Route
                  path="dashboard/maison/ajouter"
                  element={<AddNewHouse setHouses={setHouses} />}
                />
                <Route
                  path="dashboard/mise-a-jour-maison/:id"
                  element={<UpdateHouse setHouses={setHouses} />}
                />
                <Route
                  path="dashboard/details-reservation/:bookingId"
                  element={<BookingDetails />}
                />
              </Route>
            </Routes>
            <ModalContext.Provider value={{ openModal, setOpenModal }}>
              <Modal
                isOpen={openModal}
                onRequestClose={() => setOpenModal(false)}
                style={{
                  content: {
                    fontFamily: "Trebuchet MS",
                    width: "70%",
                    textAlign: "center",
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    opacity: "1",
                  },
                }}
              >
                <ModalTitle>
                  {" "}
                  Contacter l'équipe de Ma Maison des Bois{" "}
                </ModalTitle>
                <ModalText> Par téléphone : 06 20 90 78 27 </ModalText>
                <ModalText>
                  {" "}
                  Par e-mail : cliquez{" "}
                  <a href="mailto:mamaisondesbois@gmail.com"> ici </a>
                </ModalText>
                <FilledButton
                  type="button"
                  onClick={() => setOpenModal(false)}
                  margin="2rem 0"
                >
                  {" "}
                  Fermer{" "}
                </FilledButton>
              </Modal>
              <Footer />
            </ModalContext.Provider>
          </BookingContextProvider>
        </UserContextProvider>
      </>
    );
  }
}
export default App;

const ModalTitle = styled.h1`
  color: ${colors.green};
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const ModalText = styled.p`
  font-size: 1rem;
  font-weight: 100;

  a {
    text-decoration: none;
    color: ${colors.green};
  }
`;
