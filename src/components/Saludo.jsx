import PropTypes from "prop-types";


const Saludo = ({ nombre }) => {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Bienvenido al sitio.</p>
    </div>
  );
};

Saludo.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default Saludo;

