const { expect } = require('chai');

const { getLetterGrades } = require('../../index');

const disciplinesDict = {
    mathematics: 'matemática',
};

describe('Testando a função "getLetterGrades"', () => {
    describe('quando a nota é maior ou iqual a 0.9', () => {
        it('retorna "A"', () => {
            const discipline = { name: disciplinesDict.mathematics, grade: 0.9 };

            const {
                letterGrade,
            } = getLetterGrades(discipline);

            expect(letterGrade).to.be.equals('A');
        })
    })
});