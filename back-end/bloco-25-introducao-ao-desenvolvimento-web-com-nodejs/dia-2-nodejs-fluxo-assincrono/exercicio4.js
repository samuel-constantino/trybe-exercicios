/*
Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.

Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.






Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
*/

const fs = require('fs/promises');

const getCharacters = async () => {
    try{
        const data = await fs.readFile('./simpsons.json', 'utf8');

        const characters = JSON.parse(data);

        return characters;
    }catch(err){
        console.log(err.message);
    }
};

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const showCharacters = async () => {
    const characters = await getCharacters();

    characters.forEach(({id, name}) => {
        console.log(`${id} - ${name}`);
    });
};

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const getSimpsonById = async (id) => {
    const characters = await getCharacters();

    const character = characters.find((char) => char.id == id);
    
    try{
        if(character){
            console.log(character);
        }else{
            throw new Error('id não encontrado');
        }
    }catch(err){
        console.log(err.message);
    }
};

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const removeCharacters = async (ids) => {
    const characters = await getCharacters();

    const newCharacters = characters.filter((char) => !ids.includes(char.id));

    try{
        await fs.writeFile('./simpsons.json', JSON.stringify(newCharacters));
        console.log('Arquivo simpsons.json atualizado com sucesso');
    }catch(err){
        console.log(err.message);
    }
};

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
const getSimpsonFamily = async (ids) => {
    const characters = await getCharacters();

    const newCharacters = characters.filter((char) => ids.includes(char.id));

    try{
        await fs.writeFile('./simpsonFamily.json', JSON.stringify(newCharacters));
        console.log('Arquivo simpsonFamily.json atualizado com sucesso');
    }catch(err){
        console.log(err.message);
    }
};

const main = async () => {
    // showCharacters();

    // getSimpsonById(10);
    // getSimpsonById(120);

    // removeCharacters(["10", "6"]);

    // getSimpsonFamily(["1","2","3","4"]);
};

main();
