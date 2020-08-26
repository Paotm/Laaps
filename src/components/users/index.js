import React from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserProvider.js";
import styles from "./style.module.css";
import logo from "../../images/logo.png";
import titulo from "../../images/titulo.png";
import google from "../../images/google.svg";

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
          <Link to="/registerUser">
            <button className={styles.button}>Registrarse</button>
          </Link>

          <p>o <br /> iniciar sesion con google</p>
          <Link to="/orderCarwash">
            <img
              src={google}
              alt="google"
              className={styles.google}
              onClick={LogIn}
            />
          </Link>
        </div>





        {/* <button className={styles.button} onClick={closeSesion}>
          Cerrar Sesion
  </button>*/}
      </div>
    </>
  );
};

export default Users;