import PropTypes from 'prop-types';

function CalculatorButtons(label, onClick) {
    return (
        <button type="button" onClick={onClick}>
            {label}
        </button>      
    );
}

CalculatorButtons.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default CalculatorButtons;