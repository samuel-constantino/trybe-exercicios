/*
programa em JavaScript que faz uma requisição 
para a API de dad jokes 
*/

const fetch = require('node-fetch');
const axios = require('axios').default;

const url = 'https://icanhazdadjoke.com';

const requestWithFetch = () => {
    fetch(url, {
        headers: new fetch.Headers({
            Accept: 'application/json',
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log(data.joke))
        .catch((e) => console.log(e));
};

const requestWithAxios = async () => {
    try{
        const response = await axios.get(url, {
            headers: { Accept: 'text/plain' }
        })
        console.log(response.data);
    }catch(e){
        console.error(e);
    }
};

const getJokes = (numberOfJokes, requester) => {
    for (let i = 0; i < numberOfJokes; i += 1){
        requester();
    }
};

getJokes(1, requestWithAxios);

module.exports = { getJokes };