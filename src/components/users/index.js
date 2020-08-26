import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./style.module.css";

import { UserContext } from "../../context/UserProvider.js";

const Users = () => {
  const history = useHistory();

  const { usuario, LogIn, closeSesion } = React.useContext(UserContext);

  return (
    <>
      <div>
        <Link to="/registerUser">
          <button className={styles.button}>Registrarse</button>
        </Link>
      </div>
      <div>
        <Link to="/orderCarwash">
          <button className={styles.button} onClick={LogIn}>
            Login
          </button>
        </Link>
      </div>
      <div>
        {/* <button className={styles.button} onClick={closeSesion}>
          Cerrar Sesion
  </button>*/}
      </div>
    </>
  );
};

export default Users;
