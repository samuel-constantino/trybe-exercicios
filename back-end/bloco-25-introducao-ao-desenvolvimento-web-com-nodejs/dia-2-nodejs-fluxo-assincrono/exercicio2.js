const calc = require('./exercicio1.js');

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
};

const main = () => {
    const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

    calc(...randomNumbers)
        .then(result => console.log(result))
        .catch(err => console.log(err.message));
};

main();