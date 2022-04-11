//Question 1 : LinkedList

class LinkedList {
    constructor(ele) {
        if (ele) {
            ele.forEach(e => this.add(e));
        }
    }
    add(ele) {
        if (this.value === undefined) {
            this.value = ele;
            this.next = null;
        } else {
            let current = this;
            while (current.next) {
                current = current.next;
            }
            current.next = { value: ele, next: null };
        }
    }
    remove(element) {
        var current = this;
        var prev = null;
        while (current) {
            if (current.value === element) {
                if (prev == null) {
                    this.value = current.next.value;
                    this.next = current.next.next;
                } else {
                    prev.next = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
    printHelper(list, result) {
        if (list.next == null) {
            result += list.value;
            return result;
        }
        result += list.value + ',';
        return this.printHelper(list.next, result);
    }
    print() {
        let result = 'LinkedList{';
        result = this.printHelper(this, result);
        result += '}';
        console.log(result);
    }
}

let linkedlist = new LinkedList();
linkedlist.add(0);
linkedlist.add(3);
linkedlist.add(10);
console.log("After adding 0,3,10 : ");
linkedlist.print();
linkedlist.remove(10);
console.log("After removing 10 : ");
linkedlist.print();


//Question 2 : 

class Question {
    constructor(questionId, answer) {
        this.questionId = questionId;
        this.answer = answer;
    }
    checkAnswer(correctAnswer) {
        return this.answer === correctAnswer;
    }
}
class Student {
    constructor(studentId, answers = []) {
        this.studentId = studentId;
        this.answers = answers;
    }
    addAnswer(question) {
        this.answers.push(question);
    }
}
class Quiz {
    constructor(questionsArray = [], students = []) {
        this.questions = new Map();
        questionsArray.forEach(question => this.questions.set(question.questionId
            , question.answer));
        this.students = students;
    }
    scoreStudent(studentId) {
        let student = this.students.filter(student => student.studentId === studentId)[0];
        return student.answers.reduce((sum, currentQuestion) => {
            let questionId = currentQuestion.questionId; 
            let correctAnswer = this.questions.get(questionId); 
            let result = currentQuestion.checkAnswer(correctAnswer); 
            if (result) {
                sum = sum + 1;
            }
            return sum;
        }, 0);
    }
    getAverageScore() {
        return this.students.reduce((average, currentStudent, index, array) => average + this.scoreStudent(currentStudent.studentId) / array.length, 0);
    }
}

Quiz.prototype.scoreStudentBySid = function (studentId) {
    const student = this.students.filter(s => s.studentId === studentId)[0];
    return student.answers.reduce((sum, currentQuestion) => {
        if (currentQuestion.checkAnswer(this.questions.get(currentQuestion.qid))) {
            sum = sum + 1;
        }
        return sum;
    }, 0);
}



const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5