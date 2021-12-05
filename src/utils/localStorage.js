
class LocalStorage {
    static save(key, value) {
        window.localStorage.setItem(key, value);
    }

    static get(key) {
        window.localStorage.getItem(key);
    }
}