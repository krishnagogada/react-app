import React from 'react';
import { observer } from 'mobx-react'
import { GameHeader, TopLevel, LevelAndTheme, Level, ThemeButton } from './styledComponent.js';

@observer
class Header extends React.Component {

    onChangeSelectedTheme = () => {

        const { selectedTheme, onChangeSelectedTheme } = this.props;
        onChangeSelectedTheme(selectedTheme.id);

    }
    render() {

        const { topLevel, level, selectedTheme, width } = this.props;

        return (
            <GameHeader width={width}>
            <TopLevel selectedTheme={selectedTheme}>Top Level: {topLevel}</TopLevel>
            <LevelAndTheme>
                <Level selectedTheme={selectedTheme}>Level: {level}</Level>
                <ThemeButton onClick={this.onChangeSelectedTheme} selectedTheme={selectedTheme}>Mode: {selectedTheme.displayOnbutton}</ThemeButton>
            </LevelAndTheme>
        </GameHeader>
        );

    }
}
export default Header;
