import PropTypes from 'prop-types';

const Btn = ({ text, onClick, type }) => {
  return (
    <button 
    type={type} 
    onClick={onClick} 
    className="border-2 border-[#7F8CFF]  min-w-20 h-12 rounded-lg p-3
    text-[#6070FF] font-medium
    flex items-center justify-center
    hover:bg-[#6070FF] hover:text-white
    active:bg-[#2230D2] active:text-white">
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
