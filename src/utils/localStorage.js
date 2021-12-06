
class LocalStorage {
    static set(key, value) {
        console.log(key);
        window.localStorage.setItem(key, value);
    }

    static get(key) {
        return window.localStorage.getItem(key);
    }

    static getLoggedInUser() {
        return JSON.parse(LocalStorage.get('user'));
    }

    static clearLoginInfo() {
        LocalStorage.removeItem('user');
        LocalStorage.removeItem('userId');
    }

}

export default LocalStorage;
