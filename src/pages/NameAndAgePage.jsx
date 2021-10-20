import { useContext } from "react";
import ButtonHome from "../components/buttonHome";
import { Game } from "../utils/GameContext";

export default function NameAndAgePage() {
  const { username, setUsername, age, setAge } = useContext(Game);

  return (
    <>
      <div className="home-title">
        <h2>
          Maravilha!
          <br />
          Antes de iniciar, informe seu nome e idade
        </h2>
      </div>
      <div className="home-container">
        <input
          className="input-user"
          type="text"
          required
          placeholder="nome"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="input-user"
          type="text"
          required
          placeholder="idade"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <ButtonHome name="Pronto" />
      </div>
    </>
  );
}
