import React from 'react'
import { CORRECT_COLOR, GAME_OVER, NEW_PLAYER, START_GAME, WRONG_COLOR } from '../types';

const GamesReducer = (state, action) => {
 
    switch (action.type) {

        case START_GAME:
            return{
                ...state,
                colors: action.payload.colors,
                pickedColor: action.payload.pickedColor
            }

        case CORRECT_COLOR:
            return{
                ...state,
                level: state.level + 1,
                box: state.box + 1,
                lifes: 2
            }
        
        case WRONG_COLOR:
            console.log(action.payload);
            return{
                ...state,
                lifes: state.lifes - 1,
                colors: state.colors.filter(elemento => elemento !== action.payload) 
            }

        case GAME_OVER: 
        return{
            ...state, 
            level: 1,
            box: 3,
            colors: [],
            pickedColor: "",
            lifes: 2
        }
        
        default:
            return state;
    }
}

export default GamesReducer