import { useContext } from "react";
import { PropTypes } from "prop-types";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user";

const PrivateRoute = ({ role }) => {
  PrivateRoute.propTypes = {
    role: PropTypes.number.isRequired,

  };

  const user = useContext(UserContext);
  if (user.roleId === role) {
    return <Outlet />;
  }
  return <div>Vous n'avez pas accès à ces informations</div>;
};

export default PrivateRoute;
