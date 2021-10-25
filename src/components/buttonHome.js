import { useContext } from "react";
import { Game } from "../utils/GameContext";

export default function ButtonHome({ name }) {
  const {
    loadStep,
    setCurrentPage,
    currentPage,
    storeUserInfo,
    age,
    username,
    restartGame,
  } = useContext(Game);

  function checkFunction() {
    if (name === "Iniciar") {
      loadStep(1000);
      setCurrentPage(currentPage + 1);
    }

    if (name === "Pronto") {
      if (username !== "" && !isNaN(age) && age.length !== 0) {
        setCurrentPage(currentPage + 1);
        storeUserInfo();
      }
    }

    if (name === "Reiniciar") {
      restartGame();
    }
  }

  return (
    <button className="start-button" onClick={() => checkFunction()}>
      {name}
    </button>
  );
}
