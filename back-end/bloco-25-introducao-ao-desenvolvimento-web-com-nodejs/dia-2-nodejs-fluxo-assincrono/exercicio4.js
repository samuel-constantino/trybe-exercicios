const fs = require('fs/promises');

const getSimpsonById = async (id) => {
    try{
        const data = await fs.readFile('./simpsons.json', 'utf8');

        const personagens = JSON.parse(data);

        const personagem = personagens.find(({id: idSimpson}) => idSimpson == id);
        console.log(personagem);
    }catch(err){
        console.log(err);
    }
};

const main = async () => {
    try{

        const data = await fs.readFile('./simpsons.json', 'utf8');

        const simpsons = JSON.parse(data);
        
        simpsons.forEach(({id, name}) => {
            console.log(`${id} - ${name}`);
        });


    }catch(err){
        console.log(err);
    }
};

main();
getSimpsonById(2);