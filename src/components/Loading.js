import { useContext } from "react";
import { ClockLoader } from "react-spinners";
import { Game } from "../utils/GameContext";
import "../styles/loading.css";

export default function Loading() {
  const { loading } = useContext(Game);

  return (
    <>
      {loading && (
        <div className="loading-container">
          <ClockLoader size={50} color="#e2e2e2" />
        </div>
      )}
    </>
  );
}
