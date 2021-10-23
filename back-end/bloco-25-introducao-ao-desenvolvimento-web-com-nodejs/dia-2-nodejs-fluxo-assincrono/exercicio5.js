const fs = require('fs/promises');

// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
const readWriteFiles = async (files) => {
    const strings = ["a", "b", "c"];

    const crateFilePromises = strings.map((string, index) => {
        return fs.writeFile(`file${index+1}.txt`, string);
    });

    await Promise.all(crateFilePromises);

    files.forEach(async (file) => {
        const content = await fs.readFile(file);
        console.log(content.toString());
    });
};

const main = () => {
    readWriteFiles(["file1.txt", "file2.txt", "file3.txt"]);
};

main();


// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
// O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .


