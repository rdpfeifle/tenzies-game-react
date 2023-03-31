export function RollDiceBtn({ tenzies, rollDice }) {
  return (
    <button className="roll-dice" onClick={rollDice}>
      {tenzies ? "New Game" : "Roll"}
    </button>
  );
}
