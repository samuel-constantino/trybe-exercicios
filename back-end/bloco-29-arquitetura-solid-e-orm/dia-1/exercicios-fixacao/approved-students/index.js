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

// Apoio para a função `setApproved`
const SCHOOL_DATA = {
    Standard: {
        approvalGrade: 0.7,
    },
    Hogwarts: {
        approvalGrade: 0.8,
    },
};

// Apoio para a função `getGradeLetter`
const GRADE_DICT = {
    0.9: 'A',
    0.8: 'B',
    0.7: 'C',
    0.6: 'D',
    0.1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

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

// Coletar notas (letras)
const getLetterGrades = ({ name, grade }) => ({
    name,
    grade,
    letterGrade: getGradeLetter(grade),
});

// CONVERTER
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
        name,
        disciplines: disciplines.map(getLetterGrades),
        school,
    });

// DETERMINAR
const approvedStudents = (disciplines, { approvalGrade }) => disciplines
    .every(({ grade }) => grade > approvalGrade);

// ATUALIZAR
const updateApprovalData = ({ name: studentName, disciplines }) => {
    console.log(`A pessoa com nome ${studentName} foi aprovada!`);

    disciplines.map(({ name, letterGrade }) => (
        console.log(`${name}: ${letterGrade}`)));
};

const setApproved = (students) => {
    students
        .map(percentageGradesIntoLetters)
        .filter(({ disciplines, school }) => approvedStudents(disciplines, SCHOOL_DATA[school]))
        .map(updateApprovalData);
};

// Abaixo temos um exemplo de execução

const students = [
    {
        name: 'Lee',
        disciplines: [
            { name: 'matemática', grade: 0.9 },
            { name: 'história', grade: 0.8 },
        ],
        school: 'Standard',
    },
    {
        name: 'Clementine',
        disciplines: [
            { name: 'matemática', grade: 0.8 },
            { name: 'história', grade: 0.9 },
        ],
        school: 'Hogwarts',
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
