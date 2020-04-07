import React from 'react';
import { Header, MediumDevicesHeader, SmallDeviceScoreAndTopScore, GameName, GameScoresAndThemeOption, SmallDeviceScore, SmallDeviceTopScore, MediumDeviceScore, MediumDeviceTopScore, ThemeOption } from './EmojiGameStyles.js';

class EmojiGameHeader extends React.Component {
    onChangeTheme = () => {
        this.props.onChangeTheme(this.props.selectedTheme.id);
    }
    render() {
        const { selectedTheme } = this.props;
        const { score } = this.props;
        const { topScore } = this.props;
        return (
            <Header>
                <MediumDevicesHeader selectedTheme={selectedTheme}>
                    <GameName>Emoji Game</GameName>
                    <GameScoresAndThemeOption>
                        <MediumDeviceScore>Score:{score}</MediumDeviceScore>
                        <MediumDeviceTopScore>TopScore:{topScore}</MediumDeviceTopScore>
                        <ThemeOption selectedTheme={selectedTheme} onClick={this.onChangeTheme}>{selectedTheme.themeButtonDisplay}</ThemeOption>
                    </GameScoresAndThemeOption>
                </MediumDevicesHeader>    
                <SmallDeviceScoreAndTopScore selectedTheme={selectedTheme}>
                    <SmallDeviceScore>Score:{score}</SmallDeviceScore>
                    <SmallDeviceTopScore>TopScore:{topScore}</SmallDeviceTopScore>
                </SmallDeviceScoreAndTopScore>
            </Header>
        );
    }
}

export default EmojiGameHeader;
