const { expect } = require('chai');

const { percentageGradesIntoLetters } = require('../../index');

const disciplinesDict = {
    mathematics: 'matemática',
}

// const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

describe('Testando a função "percentageGradesIntoLetters"', () => {
    describe('quando a nota é maior ou igual a 0.9', () => {
        it('retorna "A"', () => {
            const student = {
                name: 'Lee',
                disciplines: [
                    { name: disciplinesDict.mathematics, grade: 0.9 },
                ],
            };

            const {
                disciplines: [{ letterGrade }],
            } = percentageGradesIntoLetters(student);

            expect(letterGrade).to.be.equal('A');
        })
    });

    // letters.forEach((letter, index) => {
    //     const grade = 0.(index+1);

    //     describe(`quando a nota é maior ou igual a 0.${1-grade}`, () =>{
    //         it(`retorna "${letter}"`, () => {
    //             let student = {
    //                 name = 'Aluno',
    //                 disciplines: [
    //                     { name: disciplinesDict.mathematics, grade }
    //                 ],
    //             }

    //             const {
    //                 disciplines: [{ letterGrade }]
    //             } = percentageGradesIntoLetters(student);

    //             expect(letterGrade).to.be.equal(letter);
    //         });
    //     });
    // });
});