import house from '../data/fictiveData';

function adminHouseCard() {
    return (
        <div>
            <img src={house.images.principal} alt={house.name} />
        </div>
    );
}

export default adminHouseCard;