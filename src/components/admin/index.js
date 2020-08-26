import React from "react";
import { db, functions } from "../../firebase.js";
import styles from "./style.module.css";
import titulo from "../../images/titulo.png";
import logo from "../../images/logo.png";

const Admin = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await db.collection("users").get();
      setUsers(res.docs.map((doc) => doc.data()));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users);

  const administrator = (email) => {
    if (!email.trim()) {
      return console.log("email vacio");
    }

    const addRol = functions.httpsCallable;
  };

  return (
    <div>
      <header>
        <div className={styles.logotipo}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.tituloC}>
          <img src={titulo} alt="titulo" className={styles.titulo} />
        </div>
      </header>
      <h3>Usuarios que han visitado la aplicaciion</h3>

      {users.map((usuario) => (
        <>
          <div key={usuario.uid}>
            Usuario: {usuario.email} - rol: {usuario.rol}
          </div>
          <div>
            {/*<button onClick={() => administrator(usuario.email)}>
              Administrador{" "}
            </button> */}
          </div>
        </>
      ))}
    </div>
  );
};

export default Admin;
