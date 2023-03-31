import PropTypes from "prop-types";

export function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#FEC601" : "white",
  };
  return (
    <div
      className="die-face"
      data-testid="die-face"
      style={styles}
      onClick={props.holdDice}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

// Add propTypes to catch possible errors
Die.propTypes = {
  value: PropTypes.number.isRequired,
  isHeld: PropTypes.bool.isRequired,
  holdDice: PropTypes.func.isRequired,
};
