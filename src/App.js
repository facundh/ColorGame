import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import GameState from "./context/GameProvider";

function App() {
  return (
    <>
      <GameState>
        <Home />
      </GameState>
    </>
  );
}

export default App;
