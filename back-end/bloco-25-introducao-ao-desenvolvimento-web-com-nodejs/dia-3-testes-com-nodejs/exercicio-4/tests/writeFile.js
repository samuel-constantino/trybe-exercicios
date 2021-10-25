const { expect } = require('chai');
const sinon = require('sinon');

const writeFile = require('../writeFile');

describe("Testa a execução da função writeFile", () => {
    describe("Testa o retorno", () => {
        before(() => {
            sinon.stub(writeFile, 'writeFile').resolves("ok");
        });
    
        after(() => {
            writeFile.writeFile.restore();
        });


        it("Deve retornar a 'string' 'ok'", () => {
            const result = writeFile('teste.txt', 'teste');

            expect(result).to.be.equal('ok');
        });
    });
});