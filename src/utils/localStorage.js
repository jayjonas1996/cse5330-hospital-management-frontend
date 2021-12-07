
class LocalStorage {
    static set(key, value) {
        window.localStorage.setItem(key, value);
    }

    static get(key) {
        return window.localStorage.getItem(key);
    }

    static getLoggedInUser() {
        return JSON.parse(LocalStorage.get('user'));
    }

    static clearLoginInfo() {
        window.localStorage.clear()
    }

}

export default LocalStorage;
