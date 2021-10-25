const { expect } = require('chai');
const fs = require('fs/promises');

const writeFile = require('../writeFile');

describe("Testa a execução da função writeFile", () => {

    describe("Testa o retorno", () => {

        it("Deve retornar a 'string' 'ok'", async () => {
            const result = await writeFile('arquivo.txt', 'teste');

            expect(result).to.be.equal('ok');
        });
    });
});
