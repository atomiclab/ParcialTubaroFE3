import { useState } from "react";
import Card from "./Card";
import ErrorMsg from "./ErrorMsg";
import "../Styles/form.css"

const Form = () => {
  const [usr, setUsr] = useState({
    name: "",
    username: "",
  });
  const [errorText, setErrorText] = useState("");

  const [showAvatar, setShowAvatar] = useState(false);
  const [showError, setShowError] = useState(false);

  const onChangeName = (event) => {
    setUsr({ ...usr, name: event.target.value });
  };
  const onChangeSurname = (event) => {
    setUsr({ ...usr, username: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^@([a-zA-Z0-9_\-\.]{1,15})$/;
    if (usr.name.trim().length > 3 && regex.test(usr.username)) {
      setShowAvatar(true);
      setShowError(false);
    } else {
      regex.test(usr.username)
        ? setErrorText("Hubo un error tus datos(Nombre mayor a 3 caracteres)!")
        : setErrorText("Hubo un error tu @!");
      setShowError(true);
      setShowAvatar(false);
    }
  };
  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <label>Cómo te llamas?</label>

      <input
        type="text"
        value={usr.name}
        onChange={onChangeName}
        placeholder="Tu nombre"
      />
      <br />
      <label>Tu @ en Twitter (por ejemplo, ginotubaro)</label>
      <input
        type="text"
        value={usr.username}
        onChange={onChangeSurname}
        placeholder="@ginotubaro"
      />
      <br />
      <button type="submit">Obtener avatar</button>
      {showAvatar && <Card usr={usr} />}
      {showError && <ErrorMsg>{errorText}</ErrorMsg>}
    </form>
    </div>
  );
};

export default Form;
