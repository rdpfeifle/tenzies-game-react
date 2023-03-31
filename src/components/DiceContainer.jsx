import { Die } from "./Die";

export function DiceContainer({ dice, holdDice }) {
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return <div className="dice-container">{diceElements}</div>;
}
