import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButtons({ label, type, onClick }) {
  return (
    <button type="button" className={type} onClick={onClick}>
      {label}
    </button>
  );
}

CalculatorButtons.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

CalculatorButtons.defaultProps = {
  type: '',
  onClick: () => {},
};

export default CalculatorButtons;
