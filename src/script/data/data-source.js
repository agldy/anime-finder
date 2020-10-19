import clubs from './clubs.js';
const apiKey = "c074c4c2aea616bd26e58655c2049a6d";

class DataSource {
    static searchClub(keyword) {
        return fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${keyword}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jikan1.p.rapidapi.com",
                "x-rapidapi-key": "804bcb96afmshe307e504853cfbbp13907ejsnec20b6f9fe13"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson.results){
                return Promise.resolve(responseJson.results);
            }else{
                Promise.reject(`${keyword} not found`);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default DataSource;