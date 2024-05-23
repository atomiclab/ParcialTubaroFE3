import React from "react";
import styles from "../Styles/avatar.module.css";

const Card = ({ usr }) => {
  const username = usr.username.startsWith("@")
    ? usr.username.slice(1)
    : usr.username; //para que me saque el @ al principio si o si
  const name = usr.name.charAt(0).toUpperCase() + usr.name.slice(1); // pongo el primer caracter en may porque queda mas lindo

  return (
    <>
      <div className={styles.card}>
        <h1>{name}, tu avatar en Twitter es</h1>
        <img
          src={`https://unavatar.io/${username}`}
          alt={`Avatar de ${name}`}
        />
        <p>(tarda en cargar)</p>
        <p>Con boton secundario la guardas.</p>
      </div>
    </>
  );
};

export default Card;
