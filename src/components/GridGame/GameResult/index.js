import React from 'react';

import { Result, Level, Congratulations, PlayAgain } from './styledComponent.js';

class GameResult extends React.Component {

    onPlayAgainClick = () => {

        const { onPlayAgainClick } = this.props;
        onPlayAgainClick();

    }
    render() {

        const { selectedTheme, level, timerId } = this.props;

        clearTimeout(timerId); //----------->Clears The Timeout Here When Game Was Completed<------------------ 

        return (
            <Result selectedTheme={selectedTheme}>
            <Level selectedTheme={selectedTheme}>{level}</Level>
            <Congratulations>Congratulations! You completed all the levels</Congratulations>
            <PlayAgain selectedTheme={selectedTheme} onClick={this.onPlayAgainClick}>Play Again</PlayAgain>
        </Result>
        );
    }

}
export default GameResult;
