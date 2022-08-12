const { getRandomWordSync, getRandomWord } = require('word-maker');

const fs = require('fs').promises;


console.log('It works!');


// question 01

function printNumbersAndRandomWord() {
    const numArr = Array.from(Array(100).keys());
    const printVal = numArr.map((n) => {
        return(`${n+1}: ${getRandomWordSync({ withErrors: false })}`);
    });

    //console.log(printVal);
    return printVal;

}  

//printNumbersAndRandomWord();

// question 02
function printFizzBuzz(){
    const numArr = Array.from(Array(100).keys());
    const printVal = numArr.map((n) => {
        return(`${n+1}: ${fizzBuzz(n+1) || getRandomWordSync({ withErrors: false })}`);
    });
    //console.log(printVal);
    return printVal;
}

function fizzBuzz(i){
    let text = '';
    if(i%3 == 0 && i%5 == 0){ 
        text = 'FizzBuzz';
    } else if(i%3 == 0){
        text = 'Fizz';
    } else if(i%5 == 0){
        text = 'Buzz';
    } 
    return text;
}

//printFizzBuzz();


// question 03
async function AsyncPrintNumbersAndRandomWord() {
    const numArr = Array.from(Array(100).keys());
    let printval = numArr.map(async (n) => {
        return(`${n+1}: ${await getRandomWord({ withErrors: false, slow: false  })}`);
    });

    //console.log(await Promise.all(printval));
    return await Promise.all(printval);
}  

//AsyncPrintNumbersAndRandomWord();

async function asyncPrintFizzBuzz(){
    const numArr = Array.from(Array(100).keys());
    let printval = numArr.map(async (n) => {
        return(`${n+1}: ${fizzBuzz(n+1) || await getRandomWord({ withErrors: false, slow: false  })}`);
    });

    //console.log(await Promise.all(printval));
    return await Promise.all(printval);
}

//asyncPrintFizzBuzz();

// question 04

function printNumbersAndRandomWordWithErrors() {
    const numArr = Array.from(Array(100).keys());
    const printVal = numArr.map((n) => {

        try {
            return(`${n+1}: ${getRandomWordSync({ withErrors: true })}`); 
        } catch (err) {
            return(`${n+1}: It shouldn't break anything!`); 
        }
    });

    //console.log(printVal);
    return printVal;

}  

//printNumbersAndRandomWordWithErrors();


function printFizzBuzzWithErrors(){
    const numArr = Array.from(Array(100).keys());
    const printVal = numArr.map((n) => {
        
        try {
            return(`${n+1}: ${fizzBuzz(n+1) || getRandomWordSync({ withErrors: true })}`);  
        } catch (err) {
            return(`${n+1}: It shouldn't break anything!`); 
        }
    });
    //console.log(printVal);
    return printVal;
}

//printFizzBuzzWithErrors();

async function AsyncPrintNumbersAndRandomWordWithErrors() {
    const numArr = Array.from(Array(100).keys());
    let printval = numArr.map(async (n) => {
        try {
            return(`${n+1}: ${await getRandomWord({ withErrors: true, slow: false  })}`);  
        } catch (err) {
            return(`${n+1}: It shouldn't break anything!`); 
        }
        
    });

    //console.log(await Promise.all(printval));
    return await Promise.all(printval);
} 

//AsyncPrintNumbersAndRandomWordWithErrors();



async function asyncPrintFizzBuzzWithErrors(){
    const numArr = Array.from(Array(100).keys());
    let printval = numArr.map(async (n) => {
        try {
            return(`${n+1}: ${fizzBuzz(n+1) || await getRandomWord({ withErrors: true, slow: false  })}`);
        } catch (err) {
            return(`${n+1}: It shouldn't break anything!`); 
        }
        
    });

    //console.log(await Promise.all(printval));
    return await Promise.all(printval);
}

//asyncPrintFizzBuzzWithErrors();

// question 05

function printData(file,printData,printtype="console"){
    if(printtype == "console"){
        console.log(printData);
    }else if(printtype == "file"){
        fs.writeFile(file, printData.join('\n'), function (err) {
            if (err) throw err;
            console.log(`${file}  saved successfully'`);
          });
    }
    
      
}

function printDataAsync(file,printData,printtype="console"){
    if(printtype == "console"){
        printData.then( n=>{
            console.log(n);
        });

    }else if(printtype == "file"){
   
        printData.then( n=>{
            fs.writeFile(file, n.join('\n'), (err)=>{
            if (err) throw err;
            console.log(`${file}  saved successfully'`);
            });
        });
    }
}
//pass printtype ="console" for print result in console
//and printtype ="file" for print result in to a file

//Question -1 print
printData('q1_printNumbersAndRandomWord.txt',printNumbersAndRandomWord(),printtype="file");

//Question -2 print
printData('q2_printFizzBuzz.txt',printFizzBuzz(),printtype="file");

//Question -3 print
printDataAsync('q3_AsyncPrintNumbersAndRandomWord.txt',AsyncPrintNumbersAndRandomWord(),printtype="file");
printDataAsync('q3_asyncPrintFizzBuzz.txt',asyncPrintFizzBuzz(),printtype="file");

//Question -4 print
printData('q4_printNumbersAndRandomWordWithErrors.txt',printNumbersAndRandomWordWithErrors(),printtype="file");
printData('q4_printFizzBuzzWithErrors.txt',printFizzBuzzWithErrors(),printtype="file");
printDataAsync('q4_AsyncPrintNumbersAndRandomWordWithErrors.txt',AsyncPrintNumbersAndRandomWordWithErrors(),printtype="file");
printDataAsync('q4_asyncPrintFizzBuzzWithErrors.txt',asyncPrintFizzBuzzWithErrors(),printtype="file");