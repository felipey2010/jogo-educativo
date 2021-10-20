import ButtonHome from "../components/buttonHome";

export default function FirstPage() {
  return (
    <>
      <div className="home-title">
        <h1>Jogo Educativo</h1>
      </div>
      <div className="home-container">
        <h2>Vamos testar seu cálculo?</h2>
        <ButtonHome name="Iniciar" />
      </div>
    </>
  );
}
