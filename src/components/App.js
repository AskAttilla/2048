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

const App = () => {
    
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);
    const [score, setScore] = useGameStatus();


    console.log('re-render')

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
        setScore(0);
    }

 
    const move = ({ keyCode }) => {
        if (!gameOver) {
            if(keyCode === 37){
            }
            else if(keyCode === 39){
            }
            else if(keyCode === 40){
            }
            else if(keyCode === 38){
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
                <StartButton callback={startGame}/>
            </StyledGame>
        </StyledGameContainer>
    )
}

export default App;