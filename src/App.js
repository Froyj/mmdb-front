import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import getHouses from "./data/houses";
import getBookings from "./data/bookings";

import Global from "./components/styled-components/Global";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import AddNewHouse from "./pages/AddNewHouse";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import House from "./pages/House";
import Search from "./pages/Search";
import Services from "./pages/Services";
import UserProfile from "./pages/UserProfile";
import ConnectionModal from "./components/ConnectionModal";
import SignUpForm from "./components/SignUpForm";
import UpdateHomeForm from "./components/UpdateHomeForm";

function App() {
  const [houses, setHouses] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getHouses(setHouses);
    getBookings(setBookings);
    console.log(houses);
  }, []);

  if (houses) {
    return (
      <>
        <Navigation />

        <Global>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/nos-maisons-forestieres"
              element={<Search houses={houses} />}
            />
            <Route path="/maison/:id" element={<House houses={houses} />} />
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/administrateur"
              element={<Admin houses={houses} bookings={bookings} />}
            />
            <Route path="/profil" element={<UserProfile />} />
            <Route path="/nouvelle-maison" element={<AddNewHouse />} />
            <Route path="/se-connecter" element={<ConnectionModal />} />
            <Route path="/creation-compte" element={<SignUpForm />} />
            <Route path="/update-house/:id" element={<UpdateHomeForm />} />
          </Routes>
        </Global>

        <Footer />
      </>
    );
  }
}

export default App;
