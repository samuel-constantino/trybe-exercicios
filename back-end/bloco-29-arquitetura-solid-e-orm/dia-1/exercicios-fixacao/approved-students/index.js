/*
Suponha que você deve construir uma aplicação 
para gerenciar a situação de estudantes numa escola. 
A sua primeira tarefa é criar uma função que, 
ao ser chamada, determina a aprovação 
ou não de uma pessoa estudante 
e atualiza seu status no banco de dados como 
Aprovada ou Reprovada . 
Além disso, as notas marcadas de 0% a 100% 
(0.0 a 1.0) devem ser convertidas 
para os conceitos de A a F .
*/

// Apoio para a função `getGradeLetter`, lembraremos disso mais a frente
const GRADE_DICT = {
    0.9: 'A',
    0.8: 'B',
    0.7: 'C',
    0.6: 'D',
    0.1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

// função menor para remover o uso excessivo de if/else
const getGradeLetter = (gradeNumber) => {
    let letterGrade = 'F';

    for (let i = 0; i < gradeKeys.length; i += 1) {
        if (gradeNumber >= gradeKeys[i]) {
            letterGrade = GRADE_DICT[gradeKeys[i]];
            break;
        }
    }

    return letterGrade;
};

// Coletar notas
const getLetterGrades = ({ name, grade }) => ({
    name,
    grade,
    letterGrade: getGradeLetter(grade),
});

// CONVERTER
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
    name,
    disciplines: disciplines.map(getLetterGrades),
});

// DETERMINAR
const approvedStudents = ({ disciplines }) => (
    disciplines.every(({ grade }) => grade > 0.7)
);

// ATUALIZAR
const updateApprovalData = ({ name, disciplines }) => {
    console.log(`A pessoa com nome ${name} foi aprovada!`);

    disciplines.map(({ name: studentName, letterGrade }) => (
        console.log(`${studentName}: ${letterGrade}`)));
};

const setApproved = (students) => {
    students
        .map(percentageGradesIntoLetters)
        .filter(approvedStudents)
        .map(updateApprovalData);
};

// Abaixo temos um exemplo de execução

const students = [
    {
        name: 'Lee',
        disciplines: [
            { name: 'matemática', grade: 0.8 },
            { name: 'história', grade: 0.6 },
        ],
    },
    {
        name: 'Clementine',
        disciplines: [
            { name: 'matemática', grade: 0.8 },
            { name: 'história', grade: 0.9 },
        ],
    },
];

setApproved(students);

module.exports = {
    percentageGradesIntoLetters,
    approvedStudents,
    updateApprovalData,
    setApproved,
    getLetterGrades,
};
