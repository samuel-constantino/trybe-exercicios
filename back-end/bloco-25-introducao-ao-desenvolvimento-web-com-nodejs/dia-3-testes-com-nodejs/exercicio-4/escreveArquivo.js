const fs = require('fs/promises');

const escreveArquivo = async (fileName, data) => {
    try {
        await fs.writeFile(fileName, data);
        return "ok";
    } catch (err) {
        console.error(err.message);
    }
};

escreveArquivo(2, "teste");

module.exports = escreveArquivo;