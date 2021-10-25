const fs = require('fs');

const writeFile = async (fileName, data) => {
    try {
        await fs.writeFileSync(fileName, data);
        return "ok";
    } catch (err) {
        console.error(err.message);
    }
};

// console.log(typeof writeFile("arquivo.txt", "Olá, mundo"));

module.exports = writeFile;