import React, { useEffect } from "react";
import { GameConsume } from "../../context/GameProvider";
import Square from "../square/Square";
import styles from "./main.module.css";

const Main = () => {
  const { state, selectedColor } = GameConsume();


  useEffect(() => {
    selectedColor();
  }, [state.level]);

  // useEffect(() => {
  //   console.log('se recargo');
  // }, [state]);
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.itemContainer}`}>
        {state.colors.map((color, index) => (
          <Square color={color} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
