const HamburgerBtn = ({ isOpen, toggle }) => {
  const openColor = '#FFFFFF';
  const closedColor = '#344563';
  const barColor = isOpen ? openColor : closedColor;

  return (
    <button
      aria-label="Toggle Menu"
      onClick={toggle}
      className="relative w-8 h-8 focus:outline-none z-40"
      style={{ color: barColor }}
    >
      <div
        className="absolute left-0 top-1/2 w-8 h-1 rounded transition-all duration-500 transform"
        style={{
          backgroundColor: isOpen ? 'transparent' : barColor,
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
        }}
      />
      <div
        className="absolute left-0 top-1/2 w-8 h-1 rounded transition-all duration-500 transform"
        style={{ backgroundColor: barColor, transform: isOpen ? 'rotate(45deg) translateY(0)' : 'translateY(0)' }}
      />
      <div
        className="absolute left-0 top-1/2 w-8 h-1 rounded transition-all duration-500 transform"
        style={{ backgroundColor: barColor, transform: isOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(10px)' }}
      />
    </button>
  );
};

export default HamburgerBtn;
