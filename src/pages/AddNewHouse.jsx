import AddHomeForm from '../components/AddHomeForm';
import Global from '../components/styled-components/Global';
import Banner from '../components/styled-components/Banner';

function AddNewHouse() {
    return (
        <>
            <Banner image="url('./resources/Banner-Add-new-house.jpeg')" position="center bottom">
                Ajouter une nouvelle maison
            </Banner>  
            <Global>
                <AddHomeForm />
            </Global>
        </>
    );
}

export default AddNewHouse;
