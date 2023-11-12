import { useState } from "react";

const SaludoInteractivo = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMensaje(`¡Hola, ${nombre}! Bienvenido al sitio.`);
  };

  return (
    <div className="descripcion">
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa tu nombre:
          <input
            type="text"
            id="nombreInput"
            value={nombre}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Saludar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default SaludoInteractivo;
