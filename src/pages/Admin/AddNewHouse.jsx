import AddHomeForm from "../../components/Admin/Home/AddHomeForm";
import Global from "../../components/styled-components/theme/Global";
import Banner from "../../components/common/Banner";

function AddNewHouse({ setHouses }) {
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
