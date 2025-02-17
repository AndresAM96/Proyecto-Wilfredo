import PropTypes from 'prop-types';

const Alert = ({ type = 'success', message, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      {onClose && <button onClick={onClose}>x</button>}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Alert;