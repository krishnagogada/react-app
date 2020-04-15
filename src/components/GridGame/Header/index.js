import React from 'react';
import { observer } from 'mobx-react'
@observer
class Header extends React.Component {

    onChangeSelectedTheme = () => {
        const { selectedTheme, onChangeSelectedTheme } = this.props;
        onChangeSelectedTheme(selectedTheme === 'Dark' ? 'Light' : "Dark");
    }

    render() {
        const { topLevel, level, selectedTheme } = this.props;
        return (
            <div>
            <div>{topLevel}</div>
            <div>
                <div>{level}</div>
                <button onClick={this.onChangeSelectedTheme}>Mode:{selectedTheme}</button>
            </div>
        </div>
        );
    }
}
export default Header;
