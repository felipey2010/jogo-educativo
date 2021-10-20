import { useContext } from "react";
import FirstPage from "./FirstPage";
import "../styles/home.css";
import { Game } from "../utils/GameContext";
import NameAndAgePage from "./NameAndAgePage";
import QuizPage from "./QuizPage";

export default function Home() {
  const { loading, currentPage } = useContext(Game);

  if (!loading) {
    return (
      <div className="home-main">
        {currentPage === 0 && <FirstPage />}
        {currentPage === 1 && <NameAndAgePage />}
        {currentPage === 2 && <QuizPage />}
      </div>
    );
  }
  return <></>;
}

// https://aykutsarac.github.io/react-quiz/
