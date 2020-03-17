import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

// Styled Components
import{ StyledGameContainer, StyledGame } from './styles/StyledTetris';

// Custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    
    const [dropTime,  setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);


    console.log('re-render')

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

 
    const move = ({ keyCode }) => {
        if (!gameOver) {
            if(keyCode === 37){
                movePlayer(-1);
            }
            else if(keyCode === 39){
                movePlayer(1);
            }
            else if(keyCode === 40){
                dropPlayer();
            }
            else if(keyCode === 38){
                playerRotate(stage, 1);
            }            
        }
    }

    return (
        <StyledGameContainer
            role="button" 
            tabIndex="0" 
            onKeyDown={e => move(e)} 
        >
            <StyledGame>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text='Game Over'/>
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`}/>
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={startGame}/>
                    
                </aside>
            </StyledGame>
        </StyledGameContainer>
    )
}

export default Tetris;