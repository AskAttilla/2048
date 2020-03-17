import React from 'react'

export const Tile = (value) => (
    <StyledTile type={value} color={VALUES[value].color}>
        <p>{value}</p>
    </StyledTile>
);