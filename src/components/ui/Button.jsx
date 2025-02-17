import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', className = '', ...rest }) => {
  return (
    <button type={type} onClick={onClick} className={`custom-button ${className}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;