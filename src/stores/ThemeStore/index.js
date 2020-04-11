import { observable, action } from 'mobx';

class ThemeStore {
    @observable selectedTheme = 'Light Mode'
    @action
    setCurrentTheme(theme) {
        this.selectedTheme = theme;
    }
}
const themeStore = new ThemeStore();
export default themeStore;
