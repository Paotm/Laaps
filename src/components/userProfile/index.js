import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../images/logo.png";
import titulo from "../../images/titulo.png";

const UserProfile = () => {
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
        <div className={styles.login}>
          <Link to="/users">
            <button className={styles.button}>Iniciar sesión </button>
          </Link>
        </div>
        <div className={styles.login}>
          <Link to="/registerUser">
            <button className={styles.button}>Nuevo usuario</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
