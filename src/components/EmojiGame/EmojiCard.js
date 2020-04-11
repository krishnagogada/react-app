import React from 'react';
import { SingleEmojiCard, EmojiImage, EmojiName } from './EmojiGameStyles.js';
class EmojiCard extends React.Component {

    onEmojiClicks = () => {
        const { emoji } = this.props;
        const { onEmojiClicks } = this.props;
        emoji.isClicked ? onEmojiClicks(false, emoji.id) : onEmojiClicks(true, emoji.id);
    }
    render() {
        const { selectedTheme } = this.props;
        const { emoji } = this.props;
        return (
            <SingleEmojiCard selectedTheme={selectedTheme} onClick={this.onEmojiClicks}>
                <EmojiImage src={emoji.url} alt={emoji.name}/>
                <EmojiName>{emoji.name}</EmojiName>
            </SingleEmojiCard>
        );
    }
}

export default EmojiCard;
