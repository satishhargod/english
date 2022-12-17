const headers = {
    'Content-Type': 'application/json',
    'X-Master-key': '$2b$10$JMA/LFzIDHZiKceVcU0l9uaqGi3Oz801E1toSFls7GgNqYvrsbg2.',
    'X-BIN-META': false
    // 'Content-Type': 'application/x-www-form-urlencoded',
}

const sentanceUrl = "https://api.jsonbin.io/v3/b/639caeae15ab31599e1e0f6d"
const dailyLife =  "https://api.jsonbin.io/v3/b/639cb483dfc68e59d56a10c1"
const officaily =  "https://api.jsonbin.io/v3/b/639cb4da15ab31599e1e12ce"
const vocabulary =  "https://api.jsonbin.io/v3/b/639cb4f8dfc68e59d56a110a"
const stories =  "https://api.jsonbin.io/v3/b/639cb59201a72b59f232627a"
const interview =  "https://api.jsonbin.io/v3/b/639deaae15ab31599e1ebb2c"

async function getSentence() {
    return new Promise((resolve, reject) => {
        let url = sentanceUrl
        fetch(url, {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: headers
        }).then((response) => response.json())
            .then((data) => {
                resolve(data)
                //console.log('Success:', data);
            })
            .catch((error) => {
                reject(error)
                //console.error('Error:', error);
            });;
    })
}

async function getDailyLife() {
    return new Promise((resolve, reject) => {
        let url = dailyLife
        fetch(url, {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: headers
        }).then((response) => response.json())
            .then((data) => {
                resolve(data)
                //console.log('Success:', data);
            })
            .catch((error) => {
                reject(error)
                //console.error('Error:', error);
            });;
    })
}

async function getOfficaily() {
    return new Promise((resolve, reject) => {
        let url = officaily
        fetch(url, {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: headers
        }).then((response) => response.json())
            .then((data) => {
                resolve(data)
                //console.log('Success:', data);
            })
            .catch((error) => {
                reject(error)
                //console.error('Error:', error);
            });;
    })
}

async function getVocabulary() {
    return new Promise((resolve, reject) => {
        let url = vocabulary
        fetch(url, {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: headers
        }).then((response) => response.json())
            .then((data) => {
                resolve(data)
                //console.log('Success:', data);
            })
            .catch((error) => {
                reject(error)
                //console.error('Error:', error);
            });;
    })
}

async function getStories() {
    return new Promise((resolve, reject) => {
        let url = stories
        fetch(url, {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: headers
        }).then((response) => response.json())
            .then((data) => {
                resolve(data)
                //console.log('Success:', data);
            })
            .catch((error) => {
                reject(error)
                //console.error('Error:', error);
            });;
    })
}

async function getInterview() {
    return new Promise((resolve, reject) => {
        let url = interview
        fetch(url, {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: headers
        }).then((response) => response.json())
            .then((data) => {
                resolve(data)
                //console.log('Success:', data);
            })
            .catch((error) => {
                reject(error)
                //console.error('Error:', error);
            });;
    })
}


module.exports = {
    getSentence,
    getDailyLife,
    getOfficaily,
    getVocabulary,
    getStories,
    getInterview
}