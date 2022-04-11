//Question 1 :
const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGarde) {
        this.grades.push(newGarde);
    },

    computeAverageGrade() {
        return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0)
    }
}


const stu1 = Object.create(student);
stu1.firstName = 'Reda';
stu1.lastName = 'Boum';
stu1.inputNewGrade(99);
stu1.inputNewGrade(83);
stu1.inputNewGrade(86);
stu1.inputNewGrade(90);
const stu2 = Object.create(student);
stu2.firstName = 'Med';
stu2.lastName = 'Ali';
stu2.inputNewGrade(81);
stu2.inputNewGrade(99);
stu2.inputNewGrade(84);
stu2.inputNewGrade(92);
const students = [stu1, stu2];
const result = students.reduce((average, stu,index, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(result);
let arr = [stu1,stu2].sort();
console.log(arr);
console.log("_______________________________________");

//Question 2
function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGarde) {
    this.grades.push(newGarde);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0)
}


//Question 3  --  Bubble sort ( O(N*N) Complexity )
Array.prototype.mysort = function () {
    let arr = this;
    let sz = arr.length;
    for (let i = sz - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log([12,13,1,8,5,10,6].mysort());


//Question 4 : LinkedList

let linkedlist1 = {};
linkedlist1.add = function (element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = { value: element, next: null };
    }
}

linkedlist1.remove = function (element) {
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
linkedlist1.printHelper = function (list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}
linkedlist1.print = function () {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
}
linkedlist1.add(1);
linkedlist1.add(2);
linkedlist1.add(3);
linkedlist1.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist1.remove(3);
linkedlist1.print(); //in the console, you should see: LinkedList{1,3}

function LinkedList() {

}
LinkedList.prototype.add = function (element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = { value: element, next: null };
    }
}
LinkedList.prototype.remove = function (element) {
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
LinkedList.prototype.printHelper = function (list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}
LinkedList.prototype.print = function () {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
}
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}
