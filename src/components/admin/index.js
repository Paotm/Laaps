import React from "react";
import { db, functions } from "../../firebase.js";

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
      <h1>Usuarios que han visitado la aplicaciion</h1>

      {users.map((usuario) => (
        <>
          <div key={usuario.uid}>
            Usuario: {usuario.email} - rol: {usuario.rol}
          </div>
          <div>
            <button onClick={() => administrator(usuario.email)}>
              Administrador{" "}
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Admin;
