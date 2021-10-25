import { useContext, useEffect } from "react";
import { Game } from "../utils/GameContext";
import "../styles/quizPage.css";
import ButtonHome from "../components/buttonHome";
import Answer from "../components/answer";

export default function QuizPage() {
  const {
    points,
    username,
    level,
    operation,
    firstNumber,
    secondNumber,
    options,
    getRandomAnswers,
  } = useContext(Game);

  useEffect(() => {
    getRandomAnswers();
    // eslint-disable-next-line
  }, [firstNumber, secondNumber]);

  return (
    <div className="game-main-container">
      <div className="game-top-container">
        <p>Pontos: {points}</p>
        <p>Level: {level}</p>
        <p>Nome: {username}</p>
      </div>
      <div className="game-middle-container">
        <p>
          {firstNumber} {operation[level]} {secondNumber} = ?
        </p>
        <div className="answer-section">
          {options.map(option => {
            return <Answer value={option} key={option} />;
          })}
        </div>
      </div>
      <div className="game-bottom-container">
        <ButtonHome name="Reiniciar" />
      </div>
    </div>
  );
}
