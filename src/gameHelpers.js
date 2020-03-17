export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), ()=>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )


export const VALUES = {
    0: {color: "#ffffff"},
    1: {color: "#cee9ea"},
    2: {color: "#b0d2cf"},
    4: {color: "#8bb3b4"},
    8: {color: "#879eb0"},
    16: {color: "#445c6d"},
}