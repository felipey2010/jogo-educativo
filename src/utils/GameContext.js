import { useState, useEffect, createContext } from "react";

export const Game = createContext();

const GameContext = ({ children }) => {
  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("game-user"))
  // );
  const [username, setUsername] = useState(
    localStorage.getItem("game-user-name") ?? ""
  );
  const [age, setAge] = useState(localStorage.getItem("game-user-age") ?? 0);
  const [loading, setLoading] = useState(false);

  // Game Assets
  const [points, setPoints] = useState(
    localStorage.getItem("game-user-points") ?? 0
  ); //Points accumulated
  const [chances, setChances] = useState(5); //Player has 5 chances for each stage
  const operation = ["+", "*", "-", "/"]; //Array of the operations
  const [notification, setNotification] = useState(""); //Use to show messages such as Game over
  const [currentPage, setCurrentPage] = useState(0);
  const [level, setLevel] = useState(0);
  const [firstNumber, setFirstNumber] = useState(
    1 + Math.floor(Math.random() * age)
  );
  const [secondNumber, setSecondNumber] = useState(
    Math.floor(Math.random() * age)
  );
  const [options, setOptions] = useState([]);
  // const [counter, setCounter] = useState(0);

  //Increase level
  function checkPoints() {
    if (points >= 0 && points <= 1250) {
      setLevel(0);
    } else if (points >= 1251 && points <= 3750) {
      setLevel(1);
    } else if (points >= 3751 && points <= 7500) {
      setLevel(2);
    } else if (points >= 7501) {
      setLevel(3);
    }
  }

  //Get two random numbers
  function getRandomNumbers() {
    setFirstNumber(Math.floor(Math.random() * age));
    setSecondNumber(Math.floor(Math.random() * age));
  }

  //Set random answers
  function getRandomAnswers() {
    setOptions([]);
    if (operation[level] === "+") {
      setOptions(array => [...array, firstNumber + secondNumber]);
    }
    if (operation[level] === "*") {
      setOptions(array => [...array, firstNumber * secondNumber]);
    }
    if (operation[level] === "-") {
      setOptions(array => [...array, firstNumber - secondNumber]);
    }
    if (operation[level] === "/") {
      setOptions(array => [...array, firstNumber / secondNumber]);
    }

    for (var i = 1; i < 3; i++) {
      setOptions(array => [...array, Math.floor(Math.random() * (2 * age))]);
    }
  }

  //Restart Game
  function restartGame() {
    loadStep(1500);
    setLevel(0);
    setCurrentPage(0);
    setLevel(0);
    setPoints(0);
    setChances(5);
    setNotification("");
    localStorage.clear();
    window.location.reload();
  }

  //Player advances the stage
  function advanceLevel() {
    if (level < 5) setLevel(level + 1);
  }

  //Player gets points
  function increasePoint(value) {
    setPoints(points + value);
  }

  //Player loses points
  function losePoint(value) {
    if (value > points) {
      setPoints(0);
    } else {
      setPoints(points - value);
    }
  }

  //Chances decrease
  function loseChance() {
    if (chances !== 0) {
      setChances(chances - 1);
    }
  }

  //Check answer
  function checkAnswer(value) {
    if (operation[level] === "+") {
      if (firstNumber + secondNumber === value) {
        increasePoint(50);
      } else {
        losePoint(25);
      }
    }
    if (operation[level] === "*") {
      if (firstNumber * secondNumber === value) {
        increasePoint(50);
      } else {
        losePoint(25);
      }
    }
    if (operation[level] === "-") {
      if (firstNumber - secondNumber === value) {
        increasePoint(50);
      } else {
        losePoint(25);
      }
    }
    if (operation[level] === "/") {
      if (firstNumber / secondNumber === value) {
        increasePoint(50);
      } else {
        losePoint(25);
      }
    }
    getRandomNumbers();
    checkPoints();
    localStorage.setItem("game-user-points", points);
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

  // function loadGameInfo() {
  //   setUsername(localStorage.getItem("game-user-name") ?? "");
  //   setAge(localStorage.getItem("game-user-age") ?? "");
  //   setPoints(localStorage.getItem("game-user-points") ?? 0);
  // }

  useEffect(() => {
    // loadGameInfo();
    getRandomNumbers();

    // eslint-disable-next-line
  }, []);

  return (
    <Game.Provider
      value={{
        username,
        setUsername,
        loading,
        setLoading,
        operation,
        loadStep,
        restartGame,
        advanceLevel,
        increasePoint,
        losePoint,
        loseChance,
        notification,
        setNotification,
        currentPage,
        setCurrentPage,
        storeUserInfo,
        age,
        setAge,
        points,
        level,
        setLevel,
        getRandomNumbers,
        firstNumber,
        secondNumber,
        options,
        getRandomAnswers,
        checkAnswer,
      }}>
      {children}
    </Game.Provider>
  );
};

export default GameContext;
