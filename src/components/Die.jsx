import PropTypes from "prop-types";

export function Die({ isHeld, holdDice, value }) {
  const styles = {
    backgroundColor: isHeld ? "#FEC601" : "white",
  };
  return (
    <div
      className="die-face"
      data-testid="die-face"
      style={styles}
      onClick={holdDice}
    >
      <h2 className="die-num">{value}</h2>
    </div>
  );
}

// Add propTypes to catch possible errors
Die.propTypes = {
  isHeld: PropTypes.bool.isRequired,
  holdDice: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
