import React from "react";
import BotonImage from "../botonImage/index.js";

import Vector from "../../images/Vector.svg";
import empleados from "../../images/empleados.svg";
import Laapslogo from "../../images/Laapslogo.svg";


const Main = () => {
  return (
    <>
      <div>
        <img className="logo" src={Laapslogo} />

      </div>
      <div>
        <BotonImage image={Vector} adress="/users" />
        <p>Usuario</p>
      </div>
      <div>
        <BotonImage image={empleados} adress="/admin" />
        <p>Laaps Team</p>
      </div>
    </>
  );
};

export default Main;
