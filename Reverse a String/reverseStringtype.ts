//Coding Challenge #1
//* **Write a function that reverses a string.** 
// This is a simple but challenging challenge that tests your understanding of strings and reversing them.

//typescript function to reverse a string
function reverse(example:string) : string{
    return example.split('').reverse().join('');
}

console.log(reverse('hello world'))

//what if you can't use reverse?
function reverseNoReverse(example:string) : string{
    let split : string[] = example.split('');
    let array : string[] = [];
    split.forEach(element => {
        array.unshift(element);
    });
    const reversed : string = array.join('');
    return reversed;
}

console.log(reverseNoReverse('hello world'));

/////////////////////////////////////////////////////////////
/*Coding Challenge #2
* **Write a function that calculates the Fibonacci sequence.** 
 The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers before it. 
 This challenge tests your understanding of recursion and the Fibonacci sequence.*/

 function fibo(){
    let x = 0;
    let y = 1;
    while (y < 1000){
        let k = x + y;
        x = k + y;
        y = x + k;
        console.log(k, x, y);
    }
    
 }
console.log(fibo());

/////////////////////////////////////////////////////////////
/*Coding Challenge #3
* **Check if a string is a palindrome.** 
 A palindrome is a string that reads the same backward as forward. 
 This challenge tests your understanding of strings and reversing them.*/

 function palind(word){
    const reversed = word.split('').reverse().join('');
    if (reversed === word){
        return true;
    }
    else{
        return false;
    }
 }
console.log(palind('racecar'));


/////////////////////////////////////////////////////////////
/*Coding Challenge #4
* **Write a function that sorts an array of numbers.** 
 This is a more challenging challenge that tests your understanding of sorting algorithms.*/

 function sortArr(array:number[]){
    let arraySorted:number[] = [];
    for (let x=0; x< array.length; x++){
        if(arraySorted.length === 0){
                arraySorted.push(array[x]);
        }
        else{
            let inserted = false;
            for(let y=0; y<arraySorted.length;y++){
                if (array[x] < arraySorted[y]){
                    let newArray = [
                        ...arraySorted.slice(0, y),
                        array[x],
                        ...arraySorted.slice(y)
                    ]
                    arraySorted = newArray;
                    inserted = true;
                    break
                }
            }
            
            if (!inserted){
                arraySorted.push(array[x]);
            }
        
            
        }
    }
    console.log(arraySorted);
}
                
sortArr([21, 30, 5, 16, 50]);

///////////////////////////////////////////////////////////////////////
/*Coding Challenge #5
* **Write a function that finds the maximum value in an array of numbers.** 
 This is a simple but challenging challenge that tests your understanding of arrays and finding the maximum value.*/

 function findHigh(array:number[]){
    let num = array[0];
    for(let x = 0;x<array.length;x++){
        if(array[x] > num){
            num = array[x];
        }
    }
    
    console.log(`The highest number in the array is: ${num}`);
}

findHigh([50, 35, 21, 60, 95, 100]);


///////////////////////////////////////////////////////////////////
/*Coding Challenge #6
* **Write a function that finds the minimum value in an array of numbers.** 
 This is similar to the previous challenge, but it tests your understanding of finding the minimum value.*/

 function findLow(array:number[]){
    let num = array[0];
    for(let x=0;x<array.length;x++){
        if (array[x] < num){
            num = array[x];
        }
    }
    console.log(`The lowest number in the list is: ${num}`);
 }

findLow([22, 34, 8, 100, 3, 20]);


//////////////////////////////////////////////////////////////////
/*Coding Challenge #7
#* **Write a function that checks if a number is prime.** A prime number is a number that is only divisible by itself and 1. 
# This challenge tests your understanding of prime numbers and the logic behind checking if a number is prime.*/

function findP(num:number){
    if(num <= 1){
        return false;
    }
    for (let x = 2; x <= Math.floor(Math.sqrt(num)); x++){
        if(num % x === 0){
            return false;
        }
    }
    return true;   
}     

console.log(findP(1049));


//////////////////////////////////////////////////////////////////
/*Coding Challenge #8
* **Find the factorial of a number.** 
 This is a classic coding challenge that tests your understanding of recursion and factorials.*/

 function factor(num:number){
    let result:number = 1;
    for(let x = 0; x<num;x++){
        result = result * num;
        num = num - 1;
    }
        
    console.log(result);
}

factor(6);

