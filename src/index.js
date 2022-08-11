const { getRandomWordSync, getRandomWord } = require('word-maker');

const fs = require('fs').promises;


console.log('It works!');

// question 01
function printNumbers(){
    for(let i=1; i<=100; i++){
        console.log(`${i}: ${getRandomWordSync({ withErrors: false })}`);
    }

}
printNumbers();



//question 02

function printNumbers2(){
    for(let i=1; i<=100; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log(`${i}: FizzBuzz`);
        } else if(i%3 == 0){
            console.log(`${i}: Fizz`);
        } else if(i%5 == 0){
            console.log(`${i}: Buzz`);
        } else {
            console.log(`${i}: ${getRandomWordSync({ withErrors: false })}`); 
        }
    
    }
}

printNumbers2();



// question 03

async function getPrintNumbers() {
    for(let i=1; i<=100; i++){
        const randomWord = await getRandomWord({ withErrors: false, slow: true  });
        console.log(`${i}: ${randomWord}`);
    }
    
  }
  getPrintNumbers();

async function getPrintNumbers2(){
    for(let i=1; i<=100; i++){

        const randomWord = await getRandomWord({ withErrors: false, slow: true  });

        if(i%3 == 0 && i%5 == 0){
            console.log(`${i}: FizzBuzz`);
        } else if(i%3 == 0){
            console.log(`${i}: Fizz`);
        } else if(i%5 == 0){
            console.log(`${i}: Buzz`);
        } else {
            console.log(`${i}: ${randomWord}`); 
        }
    
    }
}

getPrintNumbers2()

//Question 04

async function printNumbersWithErrorHandlers() {

    let randomWord;

        for(let i=1; i<=100; i++){
            try {
                randomWord = await getRandomWord({ withErrors: true });
            } catch (err) {
                randomWord = "It shouldn't break anything!";
            }
            console.log(`${i}: ${randomWord}`);
        }
    
  }
  printNumbersWithErrorHandlers();
  //-----------------------------------------------------------------
  async function printNumbers2withErrorHandlers(){
    let randomWord;
    for(let i=1; i<=100; i++){
        try {
            randomWord = await getRandomWord({ withErrors: true, slow: true  });
        } catch (err) {
            randomWord = "It shouldn't break anything!";
        }

        if(i%3 == 0 && i%5 == 0){
            console.log(`${i}: FizzBuzz`);
        } else if(i%3 == 0){
            console.log(`${i}: Fizz`);
        } else if(i%5 == 0){
            console.log(`${i}: Buzz`);
        } else {
            console.log(`${i}: ${randomWord}`); 
        }
    
    }
}

printNumbers2withErrorHandlers();

async function getPrintNumbers2WithErrorHandlers(){
    for(let i=1; i<=100; i++){

        try {
            randomWord = await getRandomWord({ withErrors: true, slow: true });
        } catch (err) {
            randomWord = "It shouldn't break anything!";
        }

        if(i%3 == 0 && i%5 == 0){
            console.log(`${i}: FizzBuzz`);
        } else if(i%3 == 0){
            console.log(`${i}: Fizz`);
        } else if(i%5 == 0){
            console.log(`${i}: Buzz`);
        } else {
            console.log(`${i}: ${randomWord}`); 
        }
    
    }
}

getPrintNumbers2WithErrorHandlers();

//Question 05

//print data to file
async function createFile() {
    let randomWord;
    let printline = '';

    for(let i=1; i<=100; i++){
        try {
            randomWord = await getRandomWordSync({ withErrors: true });
        } catch (err) {
            randomWord = "It shouldn't break anything!";
        }
       
       await printTextFile(i, randomWord);
    

    }

    
}

async function printTextFile(num, randomWord) {
    try {
      const printline = `\n ${num}: ${randomWord}`;
      await fs.writeFile('printNumbers.csv', printline, { flag: 'a' });
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }


createFile();
