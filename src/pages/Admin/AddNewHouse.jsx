import AddHomeForm from "../../components/AddHomeForm";
import Global from "../../components/styled-components/Global";
import Banner from "../../components/styled-components/Banner";
import Navigation from "../../components/Navigation";

function AddNewHouse({ setHouses }) {
  return (
    <>
      <Navigation />
      <Banner
        image="url('./ressources/Banner-Add-new-house.jpeg')"
        position="center bottom"
      >
        Ajouter une nouvelle maison
      </Banner>
      <Global>
        <AddHomeForm setHouses={setHouses} />
      </Global>
    </>
  );
}

export default AddNewHouse;
