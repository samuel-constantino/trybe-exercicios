const { expect } = require('chai');

const statusNumber = require('../naturalNumber');

describe("Testa execução da função naturalNumber", () => {

    describe("Testa o tipo do input", () => {
        it("Testa se o tipo é diferente de 'number'", () => {
            const result = statusNumber('test');
            expect(result).to.be.equal('valor inválido');
        })
    })

    describe("Testa o retorno", () => {

        it("Quando o input é um número positivo", () => {
            const result = statusNumber(1);
            expect(result).to.equal("positivo");
        })
    
        it("Quando o input é um número negativo", () => {
            const result = statusNumber(-1);
            expect(result).to.equal("negativo");
        })
    
        it("Quando o input é zero", () => {
            const result = statusNumber(0);
            expect(result).to.equal("neutro");
        })
    });
});