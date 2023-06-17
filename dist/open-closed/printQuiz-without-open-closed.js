"use strict";
const questions = [
    {
        type: 'boolean',
        desription: 'This video is useful?',
        options: [],
    },
    {
        type: 'multiChoice',
        desription: 'What is your favorite language?',
        options: ['CSS', 'HTML', 'JS', 'React'],
    },
    {
        type: 'text',
        desription: 'Describe your favorite features of JS.',
        options: []
    }
];
function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.desription);
        switch (question.type) {
            case 'boolean': {
                console.log('1.true');
                console.log('2.false');
                break;
            }
            case 'multiChoice': {
                for (let key of question.options) {
                    console.log(key);
                }
                break;
            }
            case 'text': {
                console.log("Answer is:--------------");
                break;
            }
        }
        console.log("---------------------------------------------------------");
    });
}
printQuiz(questions);
