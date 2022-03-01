import React from 'react';
import { GameConsume } from '../../context/GameProvider';
import styles from './navbar.module.css';

const Navbar = () => {

  
  const {state} = GameConsume();
  return (
    <div className={`${styles.container}`}>
        <h1 className={`${styles.title}`}>Lifes: {state.lifes}</h1>
        <button className={`${styles.pColor}`} >{state.pickedColor}</button>
        <p className={`${styles.pLevel}`}>Level: {state.level}</p>
    </div>
  )
}

export default Navbar