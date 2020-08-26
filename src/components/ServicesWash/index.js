import React, { useEffect, useState } from "react";
import OrderCarwash from "../orderCarwash/index.js";
import { db } from "../../firebase.js";

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
      <div>
        <OrderCarwash addTask={addTask} />
      </div>
      <div>
        {notes.map((service) => (
          <div>
            <h4>{service.Marca}</h4>
            <h5>{service.Color}</h5>
            <p>{service.Placas}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowNotes;
