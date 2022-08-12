## Get started

Set this repository up by running:

```
npm install
```
and 
Run `npm start` to run the code.

Answers: 
Question 01
Print numbers from 1 to 100 to the console, 
and for each number also print a random word using the function `getRandomWordSync`. 
E.g.
```
1: four
2: firm
3: shape
...
100: buffalo
```


Question 02
print the numbers as in the previous step, 
multiples of three, print "Fizz" (instead of the random word), 
for multiples of five, print "Buzz" and
for numbers which are both multiples of three and five, print "FizzBuzz".


Question 03
Create a version of steps *1* and *2* using the **asynchronous** function, 
`getRandomWord`. This function returns a Promise, 
which resolves to a random word string

Question 04
Add error handling to both the synchronous and asynchronous solutions
(calling `getRandomWord({ withErrors: true })` will intermitently throw an error instead of returning a random word). 
When an error is caught, the programm should print "It shouldn't break anything!" 
instead of the random word, "Fizz", "Buzz" or "FizzBuzz"

Question 05
Instead of printing the console. 
Write the information to a file in the root of this project.

create separate print data function for synchronous and asynchronous
and pass the print type as "console" print in console or "file" as print data to a text file.
