// Question 2
function printNumbers(from,to){
    for(let i = from ; i <= to ; i++)
    {
        setTimeout(()=>console.log(i),1000*i)
    }
}

printNumbers(1,5);


//Question 3
let i =0;
setTimeout(()=>alert(i),100);
for(let j = 0 ; j < 10000000 ; j++)
{
    i++;
}