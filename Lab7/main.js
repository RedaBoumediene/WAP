// Question : 1
function askPassword(ok, fail) {
    let password = prompt("Password ?", '')
    if (password === "rockstar") ok();
    else fail();
}1

let user = {
    name: "Reda",

    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed logged in`);
    },
};

askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));

// Question : 2
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach( student => {
            console.log(this.title + ": " + student);
        }, );
    }
};

group.showList();