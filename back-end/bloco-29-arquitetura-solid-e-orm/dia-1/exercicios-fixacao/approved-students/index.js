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

// Convertedor
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
    name,
    disciplines: disciplines.map(({ name, grade }) => {
        let letterGrade;

        if (grade >= 0.9) letterGrade = 'A';
        else if (grade >= 0.8) letterGrade = 'B';
        else if (grade >= 0.7) letterGrade = 'C';
        else if (grade >= 0.6) letterGrade = 'D';
        else if (grade >= 0.5) letterGrade = 'E';
        else letterGrade = 'F';

        return { name, grade, letterGrade };
    }),
});

// Determinar
const approvedStudents = ({ disciplines }) => (
    disciplines.every(({ grade }) => grade > 0.7)
);

// Atualizar
const updateApprovalData = ({ name, disciplines }) => {
    console.log(`A pessoa com nome ${name} foi aprovada!`);

    disciplines.map(({ name: studentName, letterGrade }) => console.log(`${studentName}: ${letterGrade}`));
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
};
