import { Suspense, lazy } from "react";
import ErrorBoundary from "./utils/ErrorBoundary";
import GameContext from "./utils/GameContext";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));

export default function Route() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="error-loading">Carregando...</div>}>
        <GameContext>
          <div className="App">
            <Loading />
            <Home />
            <Footer />
          </div>
        </GameContext>
      </Suspense>
    </ErrorBoundary>
  );
}
