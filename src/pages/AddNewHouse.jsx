import AddHomeForm from "../components/AddHomeForm";
import Global from "../components/styled-components/Global";
import Banner from "../components/styled-components/Banner";

function AddNewHouse({setHouses}) {
  return (
    <>
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
