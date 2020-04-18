import { observable } from 'mobx';

class GridTheme {

    static themeOption = {

        light: {
            id: 0,
            displayOnbutton: 'Light',
            backgroundColor: "#fff",
            cellBackgroundColor: "#4a5568",
            onRightClickCellBackgroundColor: "#42a671",
            onWrongClickCellBackgroundColor: "#e53e3e",
            color: "black",
        },
        dark: {
            id: 1,
            displayOnbutton: 'Dark',
            backgroundColor: " #1a202c",
            cellBackgroundColor: "#2a4363",
            onRightClickCellBackgroundColor: "#4ecbc0",
            onWrongClickCellBackgroundColor: "#e53e3e",
            color: "white",
        }

    }

    @observable selectedTheme = GridTheme.themeOption.dark

    onChangeSelectedTheme = (themeId) => {

        this.selectedTheme = themeId === 0 ? GridTheme.themeOption.dark : GridTheme.themeOption.light;

    }
}

const gridTheme = new GridTheme();

export default gridTheme;
