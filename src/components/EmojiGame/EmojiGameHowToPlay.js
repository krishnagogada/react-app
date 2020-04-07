import React from 'react';
import { InstructionFooter, InstructionHeading, Instructions } from './EmojiGameStyles.js';

function GameInstruction(props) {
    return (
        <InstructionFooter selectedTheme = { props.selectedTheme }>
            <InstructionHeading>How to play?</InstructionHeading>
            <Instructions>Get points by clicking on an image but don't click on any image more than once!</Instructions>
        </InstructionFooter>
    );
}

export default GameInstruction;
