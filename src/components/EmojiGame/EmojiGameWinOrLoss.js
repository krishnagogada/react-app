import React from 'react';
import { EndGame, TotalGameEndScore, WinOrLossDisplay, PlayAgain } from './EmojiGameStyles.js';

function WinOrLoss(props) {
    return (
        <EndGame selectedTheme={props.selectedTheme}>
                <TotalGameEndScore selectedTheme={props.selectedTheme}>{props.score}</TotalGameEndScore>
                <WinOrLossDisplay color={props.isWon ? '#48bb78':'#f56565'}>You {props.isWon ? 'Won':'Lose'}!</WinOrLossDisplay>
                <PlayAgain onClick={props.onPlayAgain}>Play Again</PlayAgain>
            </EndGame>
    );
}

export default WinOrLoss;
