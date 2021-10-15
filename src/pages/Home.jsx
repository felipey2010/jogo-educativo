import { useContext } from "react";
import "../styles/home.css";
import { Game } from "../utils/GameContext";

export default function Home() {
  const { loadStep, loading } = useContext(Game);

  if (!loading) {
    return (
      <div className="home-main">
        <div className="home-title">
          <h1>Jogo Educativo</h1>
        </div>
        <div className="home-container">
          <h2>Comece quando quiser</h2>
          <button className="start-button" onClick={() => loadStep()}>
            Iniciar
          </button>
        </div>
      </div>
    );
  }
  return <></>;
}

// https://aykutsarac.github.io/react-quiz/
