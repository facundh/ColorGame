import React, {
  createContext,
  useContext,
  useReducer
} from "react";
import Swal from "sweetalert2";
import GamesReducer from "./Games/GamesReducer";
import { CORRECT_COLOR, GAME_OVER, START_GAME, WRONG_COLOR } from "./types";

const GameContext = createContext();
export const GameConsume = () => useContext(GameContext);

const initialGameState = {
  player: "",
  level: 1,
  box: 3,
  colors: [],
  pickedColor: "",
  lifes: 2
};

const GameState = ({ children }) => {
  const [state, dispatch] = useReducer(GamesReducer, initialGameState);

  const startColor = () => {
    let symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    const colors = [];

    for (let i = 0; i < state.box; i += 1) {
      for (let j = 0; j < 6; j += 1) {
        color = color + symbols[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
      color = "#";
    }

    return colors;
  };

  const selectedColor = () => {
    const colors = startColor();

    const pickedColor = colors[Math.floor(Math.random() * colors.length)];

    dispatch({
      type: START_GAME,
      payload: {
        colors,
        pickedColor,
      },
    });
  };

  const checkColor = (color) => {
    console.log(color);
    if (state.lifes > 0  ) {
      if (color === state.pickedColor) {
        dispatch({
          type: CORRECT_COLOR,
        });
        Swal.fire("Good job!", "You clicked the button!", "success");
        selectedColor();
      } else {
        dispatch({
          type: WRONG_COLOR,
          payload: color,
        });
        Swal.fire({
          title: "Wrong Color!",
          text: `You have ${state.lifes} lifes`,
          icon: "error",
        });
        console.log("wRONG COLOR");
      }
    } else {
      dispatch({
        type: GAME_OVER,
      });

      Swal.fire({
        title: "Game Over!",
        text: `You have ${state.lifes} lifes`,
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Play again",
      })
      selectedColor()
    }
  };

 

  return (
    <GameContext.Provider
      value={{ startColor, selectedColor, state, checkColor }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameState;
