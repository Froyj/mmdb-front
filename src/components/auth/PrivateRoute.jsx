import { useContext } from "react";
import { PropTypes } from "prop-types";
import { UserContext } from "../../contexts/user";

const PrivateRoute = ({ role, children }) => {
  PrivateRoute.propTypes = {
    role: PropTypes.number.isRequired,

  };

  const user = useContext(UserContext);
  if (user.roleId === role) {
    return children;
  }
  return <div>Vous n'avez pas accès à ces informations</div>;
};

export default PrivateRoute;
