import { NavLink, useParams } from "react-router-dom";
import BlankButton from "../components/styled-components/BlankButton";

function Search() {
    const { id } = useParams();

    return (
        <div>
            Maison id = { id }
            <NavLink to='/Maison/:id'><BlankButton> Annonce </BlankButton></NavLink>

        </div>
    );
}

export default Search;