import { observable } from 'mobx';

class GridTheme {

    @observable selectedTheme = "Dark"

    onChangeSelectedTheme = (theme) => {
        this.selectedTheme = theme;
    }
}
const gridTheme = new GridTheme();
export default gridTheme;
