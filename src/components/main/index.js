import React from "react";
import BotonImage from "../botonImage/index.js";
import style from "./style.module.css"
import titulo from "../../images/titulo.png";
import logo from "../../images/logo.png";
import user from "../../images/user.svg";
import team from "../../images/team.svg";


const Main = () => {
  return (
    <>

      <header>
        <div className={style.logotipo}><img src={logo} alt="logo" className={style.logo} /></div>
        <div className={style.tituloC}><img src={titulo} alt="titulo" className={style.titulo} /></div>
      </header>

      <main>
        <div className={style.registroC}><BotonImage image={user} adress="/users" /></div>
        <p>Usuario</p>
        <div className={style.usuariosC}><BotonImage image={team} adress="/admin" /></div>
        <p>Equipo Laaps</p>
      </main>


    </>
  );
};

export default Main;
