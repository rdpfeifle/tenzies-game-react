import "./App.css";
import { useState, useEffect } from "react";
import { GameTitle } from "./components/GameTitle";
import { Instructions } from "./components/Instructions";
import { DiceContainer } from "./components/DiceContainer";
import { RollDiceBtn } from "./components/RollDiceBtn";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    if (!tenzies) {
      // check if all dice are held
      const allHeld = dice.every((die) => die.isHeld);

      // set the first value as the first dice index
      const firstValue = dice[0].value;
      console.log(firstValue);

      // check if they all have the same value comparing to the firstValue
      const allSameValue = dice.every((die) => die.value === firstValue);

      // if they are all held and all have the same value, the player has won
      if (allHeld && allSameValue) {
        setTenzies(true);
      }
    } else {
      // otherwise (if the player already won), reset the game
      setTenzies(false);
      setDice(allNewDice());
    }
  }, [dice]);

  // helper function to generate new die
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  // generate all new dice
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    // access oldDice state
    setDice((oldDice) =>
      oldDice.map((die) => {
        // check if the die is already held
        // if so, return the die
        // otherwise, generate a new die
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        // check if the id of the current die object matches the one we're looking for
        // if it does match, create a copy of the current die and flip the value of isHeld
        // if it doesn't match, return the die
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <GameTitle />
      <Instructions />
      <DiceContainer dice={dice} holdDice={holdDice} />
      <RollDiceBtn tenzies={tenzies} rollDice={rollDice} />
    </main>
  );
}
