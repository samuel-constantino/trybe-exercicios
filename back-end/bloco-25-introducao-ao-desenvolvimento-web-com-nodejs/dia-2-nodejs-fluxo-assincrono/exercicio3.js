const calc = require('./exercicio1.js');

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
};

const main = async () => {
    const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

    try{
        const result = await calc(...randomNumbers)
        console.log(result);
    } catch(e){
        console.log(e.message);
    }
    
};

main();