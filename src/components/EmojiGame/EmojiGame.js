import React from 'react';
import EmojiGameHeader from './EmojiGameHeader.js';
import EmojiCard from './EmojiCard.js';
import WinOrLoss from './EmojiGameWinOrLoss.js';
import { EmojiGameContainer, AllEmojiCards } from './EmojiGameStyles.js';
import GameInstruction from './EmojiGameHowToPlay.js';
class EmojiGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            topScore: 0,
            gameState: 'Playing',
            Emojis: [],
            selectedTheme: EmojiGame.themeOption.light
        };
    }
    static themeOption = {
        light: {
            id: "0",
            themeButtonDisplay: 'Dark Theme',
            headerAndFooterBackground: '#fff',
            backgroundcolor: "#ebf4ff",
            emojiCardBackground: '#fff',
            scoreColor: '#2a4365',
            color: 'black',
        },
        dark: {
            id: "1",
            themeButtonDisplay: 'Light Theme',
            headerAndFooterBackground: '#2d3748',
            backgroundcolor: '#1a202c',
            emojiCardBackground: '#2c5282',
            scoreColor: '#fff',
            color: 'white',
        }
    }
    componentDidMount = () => {
        let allEmojisObjects = [];
        let listOfEmojisName = ['Exploding Head', 'Grinning Face with Sweat', 'Smiling Face with Heart-Eyes', 'Smirking Face', 'Thinking Face', 'Winking Face', 'Grinning Face', 'Crying Face', 'Astonished Face', 'Face with Tears of Joy', 'Star-Struck', 'Winking Face with Tongue'];
        for (let index = 0; index < 12; index++) {
            allEmojisObjects.push({ key: index.toString(), id: index, url: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${index+1}.png`, name: listOfEmojisName[index], isClicked: false });
        }
        this.setState({ Emojis: allEmojisObjects });
    }
    onEmojiClicks = (isCorrect, id) => {
        if (isCorrect) {
            if (this.state.score === this.state.Emojis.length - 1) {
                this.setState({ gameState: 'Won' });
            }
            else {
                this.setState({ gameState: 'Playing' });
                this.shuffleEmojis();
            }

            let listOfEmojis = this.state.Emojis.map((emoji) => {
                if (emoji.id === id) {
                    emoji.isClicked = true;
                }
                return emoji;
            });
            this.setState({ Emojis: listOfEmojis });
            this.increamentScore();
        }
        else {
            this.setState({ gameState: 'Lose' });
        }
    }
    shuffleEmojis = () => {
        let listOfEmojis = this.state.Emojis;

        for (let index1 = listOfEmojis.length - 1; index1 > 0; index1--) {
            let index2 = Math.floor(Math.random() * (index1 + 1));
            let temp = listOfEmojis[index1];
            listOfEmojis[index1] = listOfEmojis[index2];
            listOfEmojis[index2] = temp;
        }

        this.setState({ Emojis: listOfEmojis });

    }
    increamentScore = () => {
        this.setState(prevState => ({ score: prevState.score + 1 }));
    }
    onPlayAgain = () => {
        if (this.state.score > this.state.topScore) {
            this.setTopScore();
            this.resetGame();
        }
        else {
            this.resetGame();
        }
    }
    resetGame = () => {
        this.setState({ score: 0, gameState: 'Playing' });
        const listOfEmoji = this.state.Emojis.map((emoji) => {
            emoji.isClicked = false;
            return emoji;
        });
        this.setState({ Emojis: listOfEmoji });

    }
    setTopScore = () => {
        this.setState({ topScore: this.state.score });
    }
    onChangeTheme = (id) => {
        id === '1' ? this.setState({ selectedTheme: EmojiGame.themeOption.light }) : this.setState({ selectedTheme: EmojiGame.themeOption.dark });
    }
    renderEmojiCards = () => {
        return <AllEmojiCards selectedTheme={this.state.selectedTheme}>
                    {this.state.Emojis.map((emoji)=>{
                        return <EmojiCard emoji={emoji} onEmojiClicks={this.onEmojiClicks} selectedTheme={this.state.selectedTheme}/>;
                    })}
                </AllEmojiCards>;
    }
    renderWinOrLoss = () => {
        return <WinOrLoss score={this.state.score} isWon={this.state.gameState === 'Won' ? true : false} onPlayAgain={this.onPlayAgain} selectedTheme={this.state.selectedTheme}/>;
    }
    render() {

        if (this.state.Emojis.length > 0) {
            return (
                <EmojiGameContainer>
                    <EmojiGameHeader score={this.state.score} topScore={this.state.topScore} onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
                    {this.state.gameState ==='Playing' ? this.renderEmojiCards() :this.renderWinOrLoss()}
                    <GameInstruction selectedTheme={this.state.selectedTheme}/>
                </EmojiGameContainer>
            );
        }
        else {
            return null;
        }
    }
}
export default EmojiGame;
