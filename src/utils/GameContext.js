import { useState, useEffect, createContext } from "react";

export const Game = createContext();

const GameContext = ({ children }) => {
  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("game-user"))
  // );
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [loading, setLoading] = useState(false);

  // Game Assets
  const [stage, setStage] = useState(0); //the stage of the game
  const [points, setPoints] = useState(0); //Points accumulated
  const [chances, setChances] = useState(5); //Player has 5 chances for each stage
  const operation = ["+", "-", "*", "/"]; //Array of the operations
  const [notification, setNotification] = useState(""); //Use to show messages such as Game over
  const [currentPage, setCurrentPage] = useState(0);

  //Restart Game
  function restartGame() {
    loadStep(1500);
    setStage(0);
    setPoints(0);
    setChances(5);
    setNotification("");
  }

  //Player advances the stage
  function advanceStage() {
    if (stage < 5) setStage(stage + 1);
  }

  //Player gets points
  function increasePoint(value) {
    setPoints(points + value);
  }

  //Player loses points
  function losePoint(value) {
    if (value > points) {
      setPoints(0);
      return;
    }
    setPoints(points - value);
  }

  //Chances decrease
  function loseChance() {
    if (chances !== 0) {
      setChances(chances - 1);
    }
  }

  //Send the operation
  function getOperation() {
    return operation[stage];
  }

  //Store user infor in local storage
  function storeUserInfo() {
    localStorage.setItem("game-user-name", username);
    localStorage.setItem("game-user-age", age);
  }

  //function to clear notification used globally
  function loadStep(value) {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, value);
    return () => clearTimeout(timeoutId);
  }

  useEffect(() => {
    setUsername(localStorage.getItem("game-user-name"));
    setAge(localStorage.getItem("game-user-age"));
    // eslint-disable-next-line
  }, []);

  return (
    <Game.Provider
      value={{
        username,
        setUsername,
        loading,
        setLoading,
        loadStep,
        restartGame,
        advanceStage,
        increasePoint,
        losePoint,
        loseChance,
        getOperation,
        notification,
        setNotification,
        currentPage,
        setCurrentPage,
        storeUserInfo,
        age,
        setAge,
      }}>
      {children}
    </Game.Provider>
  );
};

export default GameContext;
