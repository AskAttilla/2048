import React from 'react';

import { StyledStage } from './styles/StyledStage';

import Tile from './Cell';

const Stage = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell,x) => <Tile key={x} type={cell[0]}/>))}
    </StyledStage>
)

export default Stage;