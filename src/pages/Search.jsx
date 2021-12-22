import PropTypes from "prop-types";

import Global from "../components/styled-components/Global";
import SearchHouseList from "../components/SearchHouseList";

function Search({ houses }) {
    Search.propTypes = {
        houses: PropTypes.string.isRequired,
    }

    return (
        <Global>
            <SearchHouseList houses={houses} />
        </Global>
    );
}

export default Search;