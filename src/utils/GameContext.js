import { useState, useEffect, createContext } from "react";

export const Game = createContext();

const GameContext = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("game-user"))
  );
  const [loading, setLoading] = useState(false);
  // const [step, setStep] = useState(0);

  //function to clear notification used globally
  function loadStep() {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("game-user")));
    // eslint-disable-next-line
  }, []);
  return (
    <Game.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        loadStep,
      }}>
      {children}
    </Game.Provider>
  );
};

export default GameContext;
