import React from "react";
import BotonImage from "../botonImage/index.js";
import style from "./style.module.css";
import titulo from "../../images/titulo.png";
import logo from "../../images/logo.png";
import registro from "../../images/registro.png";
import usuarios from "../../images/usuarios.png";

const Main = () => {
  return (
    <>
      <header>
        <div className={style.logotipo}>
          <img src={logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.tituloC}>
          <img src={titulo} alt="titulo" className={style.titulo} />
        </div>
      </header>

      <main>
        <div className={style.registroC}>
          <BotonImage image={registro} adress="/userProfile" />
        </div>
        <h2>Eres Usuario</h2>
        <div className={style.usuariosC}>
          <BotonImage image={usuarios} adress="/users" />
        </div>
        <h2>Equipo Laaps</h2>
      </main>
    </>
  );
};

export default Main;
