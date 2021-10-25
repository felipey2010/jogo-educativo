import { useContext } from "react";
import { Game } from "../utils/GameContext";

export default function Answer({ value }) {
  const { checkAnswer } = useContext(Game);
  return <span onClick={() => checkAnswer(value)}>{value}</span>;
}
