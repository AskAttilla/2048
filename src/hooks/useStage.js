import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {

        const updateStage = prevStage => {
            // First flush the stage
            const newStage = prevStage.map(row => 
                row.map(tile => (tile[1] === 'clear' ? [0, 'clear'] : tile)),
            );

            return newStage;
        };
        
        setStage(prev => updateStage(prev));
    }, [
        player.collided, 
        player.pos.x,
        player.pos.y,
        player.tetromino,
        resetPlayer,
    ]);

    return [stage, setStage];
}