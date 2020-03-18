import { useState, useCallback, useEffect } from 'react';

export const useGameStatus = () => {
    const [score, setScore] = useState(0);

    const linePoints = [40, 100, 300, 1200];

    const calcScore = useCallback(() => {
    }, [linePoints]);

    useEffect(() => {
        calcScore();
    }, [calcScore, score]);

    return [score, setScore];
}