class BooleanQuestion {
    description: string;
    constructor(description: string) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log('1.true');
        console.log('2.false');
    }
}

class MultiChoiceQuestion {
    description: string;
    options: string[];

    constructor(description: string, options: string[]) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoice() {
       this.options.forEach((option, index) => {
          console.log(`${index + 1}, ${option}`);
        })
    }
}

class TextQuestion {
    description: string;
    constructor(description: string) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log("Answer is:--------------");
    }
}

class RangeQuestion {
    description: string;
    constructor(description: string) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log("Min:--------------");
        console.log("Max:--------------");
    }
}

function printNewQuiz(questions: (BooleanQuestion | MultiChoiceQuestion | TextQuestion)[]) {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoice();
        console.log('----------------------------------------------');
    })
}

const questionsList = [
    new BooleanQuestion('This video is useful?'),
    new MultiChoiceQuestion('What is your favorite language?', ['CSS', 'HTML', 'JS', 'React']),
    new TextQuestion('Describe your favorite features of JS.'),
    new RangeQuestion("How much calories do you eat every day?"),
];

printNewQuiz(questionsList);