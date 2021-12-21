import SearchHouseCard from "./SearchHouseCard";
import house from "../data/fictiveData";

function SearchHouseList() {
    return (
        <>
            {house.map(el => 
                <SearchHouseCard 
                    index={el.id} 
                    name={el.name} 
                    text={el.shortDescription} 
                    image={el.images.principal} 
                    city={el.city}
                    capacity={el.capacity} 
                />
            )}
        </>
    );
}

export default SearchHouseList;