import PropTypes from 'prop-types';
import SearchHouseList from '../components/SearchHouseList';
import Banner from '../components/common/Banner';

function HouseList({ houses }) {
  HouseList.propTypes = {
    houses: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
    <>
      <Banner
        backgroundPosition='center'
        marginTop='0'
        image="url('./ressources/Banner-Nos-maisons-forestières.jpg')"
      >
        Nos maisons forestières
      </Banner>
      <SearchHouseList houses={houses} />
    </>
  );
}

export default HouseList;
