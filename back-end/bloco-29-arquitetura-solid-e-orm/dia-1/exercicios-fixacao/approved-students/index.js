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

const setApproved = (students) => {
    const studentsWithLetterGrade = students.map((student) => {
        const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
            if (discipline.grade >= 0.9) discipline.letterGrade = 'A';
            else if (discipline.grade >= 0.8) discipline.letterGrade = 'B';
            else if (discipline.grade >= 0.7) discipline.letterGrade = 'C';
            else if (discipline.grade >= 0.6) discipline.letterGrade = 'D';
            else if (discipline.grade >= 0.1) discipline.letterGrade = 'E';
            else discipline.letterGrade = 'F';

            return discipline;
        });

        return {
            name: student.name,
            disciplines: disciplinesWithLetterGrade,
        };
    });

    const approvedStudents = studentsWithLetterGrade.filter(({ disciplines }) => disciplines.every((discipline) => discipline.grade > 0.7));

    // Finja que o console.log é algo que atualiza ma base de dados

    approvedStudents.map(({ name, disciplines }) => {
        console.log(`A pessoa com nome ${name} foi aprovada`);
        disciplines.map(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
    });
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
