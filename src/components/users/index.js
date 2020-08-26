import React from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserProvider.js";
import styles from "./style.module.css";
import logo from "../../images/logo.png";
import titulo from "../../images/titulo.png";
import google from "../../images/google.png";
import login from "../../images/login.png";

const Users = () => {
  const history = useHistory();

  const { usuario, LogIn, closeSesion } = React.useContext(UserContext);

  return (
    <>
      <div className={styles.Container}>
        <header>
          <div className={styles.logotipo}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.tituloC}>
            <img src={titulo} alt="titulo" className={styles.titulo} />
          </div>
        </header>

        <h1>Bienvenido</h1>

        <div className={styles.loginC}>
          <img src={login} alt="login" className={styles.login} />
        </div>

        <div classNam={styles.googleC}>
          <div>
            <Link to="/orderCarwash">
              <img
                src={google}
                alt="google"
                className={styles.google}
                onClick={LogIn}
              />
            </Link>
          </div>
        </div>

        {/* <button className={styles.button} onClick={closeSesion}>
          Cerrar Sesion
  </button>*/}
      </div>
    </>
  );
};

export default Users;
