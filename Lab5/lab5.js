//Exercice 1:
function summation(arr){
    return arr.filter(x=>x>20).reduce((x,y)=>x+y,0);
}

console.log(summation([100,20,10,50]));


//Exercice 2:
function getNewArray(arr){
    return arr.filter(s=>(s.includes('a')&&s.length>=5))
}

function getNewArray1(qs){

    return qs.filter(input=>(input.includes("a") && input.length==5));

    }

console.log(getNewArray(["Reda","Hello World!","abcde","1234","aaaa"]))