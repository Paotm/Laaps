import React, { useEffect, useState } from "react";
import OrderCarwash from "../orderCarwash/index.js";
import { db } from "../../firebase.js";

import styles from "./style.module.css";
import logo from "../../images/logo.png";
import titulo from "../../images/titulo.png";

const ShowNotes = () => {
  const [notes, setNotes] = useState([]);
  const addTask = async (noteObject) => {
    await db.collection("services").doc().set(noteObject);
    console.log("Nueva tarea agregada", noteObject);
  };
  const getNotes = () => {
    db.collection("services").onSnapshot((querySanpshot) => {
      const docs = [];

      querySanpshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setNotes(docs);
    });
  };
  useEffect(() => {
    getNotes();
  }, []);

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
        <div>
          <OrderCarwash addTask={addTask} />
        </div>
        <div className={styles.serviceWash}>
          {notes.map((service) => (
            <div>
              <h4>El car wash sera para el</h4>
              <h5> Auto {service.Marca}</h5>
              <h5>Color {service.Color} </h5>
              <h5>Placas {service.Placas}</h5>
              <h5>Total $130.00</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowNotes;
