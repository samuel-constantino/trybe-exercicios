const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;

const escreveArquivo = require('../escreveArquivo');

describe("Testa a execução da função escreveArquivo", () => {

    describe("Testa o retorno", () => {

        before(() => {
            sinon.stub(fs, 'writeFile');
        });

        after(() => {
            fs.writeFile.restore();
        });

        it("Verifica se é string", async () => {
            const result = await escreveArquivo('teste');
            expect(result).to.be.a('string');
        })

        it("Deve retornar a 'string' 'ok'", async () => {
            const result = await escreveArquivo('arquivo.txt', 'teste');

            expect(result).to.be.equal('ok');
        });
    });
});
