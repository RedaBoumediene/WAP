//Question 1:
Array.prototype.odd=function(){
    return this.filter(e=>(e&1)==1);
    }
    Array.prototype.even=function(){
        return this.filter(e=>(e&1)==0);
        }
    console.log([1,2,3,4].odd());
    console.log([1,2,3,4].even());

//Question 2

//1
//Explain why do we want sometimes to use setImmediate instead of using setTimeout?
//setTimeout : is simply like calling the function after delay has finished.
//setImmediate : is similar except that it doesn't use queue of functions. 
//It checks queue of I/O eventhandlers.  If all I/O events in the current snapshot are processed,
//it executes the callback.

//2
//Explain the difference between process.nextTick and setImmediate?
//setImmediate() and process.nextTick() are two functions
//which allows us to control the order of execution of our
//code in the event loop. Both of these functions schedule our
//callback handlers in the event queue. 

//3
//Does Node.js has window object?
//No