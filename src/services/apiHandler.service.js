export default class APIHandler {
    
    static host =  'http://localhost:3000' // process.env.REACT_APP_BACKEND_FULL_HOST;

    static fetchGet(url) {
        return new Promise((resolve, reject) => {
            fetch(APIHandler.host + url, { 
                method: 'GET', 
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json())
            .then(
                (result) => { resolve(result); },
                (error) => { console.error(error); }
            );
        });
    }

    static async fetchPost(url, data) {
        await fetch(APIHandler.host + url, { 
            method: 'GET', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(
            (result) => { return result; },
            (error) => { console.error(error); }
        );
    }
}
