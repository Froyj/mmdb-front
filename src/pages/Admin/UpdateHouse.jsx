import UpdateHomeForm from "../../components/UpdateHomeForm";
import Navigation from "../../components/layout/Navigation";

function UpdateHouse({ setHouses }) {
  return (
    <>
      <Navigation />
      <UpdateHomeForm setHouses={setHouses} />
    </>
  );
}

export default UpdateHouse;
