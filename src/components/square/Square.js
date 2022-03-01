import React, { useState } from 'react'
import { GameConsume } from '../../context/GameProvider'
import styles from './square.module.css'


const Square = ({color}) => {
    const {checkColor } = GameConsume();
    
  return (
    <div style={{backgroundColor:color}} className={`${styles.item}`} onClick={() => checkColor(color)}>
    </div>
  )
}

export default Square