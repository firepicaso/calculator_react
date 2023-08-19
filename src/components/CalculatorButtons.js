import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButtons(label) {
  return (
    <button type="button">
      {label}
    </button>
  );
}

CalculatorButtons.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CalculatorButtons;
