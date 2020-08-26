import React, { useState } from "react";
import styles from "./style.module.css";

const OrderCarwash = (props) => {
  const initialStateValues = {
    Marca: "",
    Color: "",
    Placas: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(values);
    //reiniciamos los valores
    setValues({ ...initialStateValues });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Marca del auto"
            name="Marca"
            onChange={handleInputChange}
            //con esto reiniciamos los valores
            value={values.Marca}
            className={styles.input}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Color"
            name="Color"
            onChange={handleInputChange}
            //con esto reiniciamos los valores
            value={values.Color}
            className={styles.input}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Placas"
            name="Placas"
            onChange={handleInputChange}
            //con esto reiniciamos los valores
            value={values.Placas}
            className={styles.input}
          />
        </div>

        <div>
          <button className={styles.button}>Solicitar</button>
        </div>
      </form>
    </div>
  );
};

export default OrderCarwash;
