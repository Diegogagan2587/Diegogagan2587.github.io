import PropTypes from 'prop-types';

const Btn = ({ text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className="border-2 bg-red-100">
      {text}
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Btn;
