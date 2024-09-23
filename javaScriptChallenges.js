//Coding Challenge #1: * **Write a function that reverses a string.** 
// This is a simple but challenging challenge that tests your understanding of strings and reversing them.

//javascript function to reverse a string
function reverseString(string){
    reversed = string.split('').reverse().join('');
    return reversed;
}

console.log(reverseString('hello world'));


//what if you can't use the reverse method?
function revNoReverse(string){
    reversed = string.split('');
    newArray = [];
    reversed.forEach(element => {
        newArray.unshift(element);
    });
    reversed = newArray.join('');
    return reversed;
}

console.log(revNoReverse('hello world'))

/////////////////////////////////////////////////////////////
/*Coding Challenge #2
* **Write a function that calculates the Fibonacci sequence.** 
 The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers before it. 
 This challenge tests your understanding of recursion and the Fibonacci sequence.*/

 function fibonacci(){
    x = 0;
    y = 1;
    while (y < 1000){
        k = x + y;
        x = k + y;
        y = x + k;
        console.log(k, x, y);
    }
    
 }
console.log(fibonacci());
 


 /////////////////////////////////////////////////////////////
/*#Coding Challenge #3
* **Check if a string is a palindrome.** 
 A palindrome is a string that reads the same backward as forward. 
 This challenge tests your understanding of strings and reversing them.*/

 function palindrome(word){
    reversed = word.split('').reverse().join('');
    if (reversed === word){
        return true;
    }
    else{
        return false;
    }
 }
console.log(palindrome('racecar'));



/////////////////////////////////////////////////////////////
/*Coding Challenge #4
* **Write a function that sorts an array of numbers.** 
 This is a more challenging challenge that tests your understanding of sorting algorithms.*/

 function sortArray(array){
    let arraySorted = [];
    for (let x=0; x< array.length; x++){
        if(arraySorted.length === 0){
                arraySorted.push(array[x])
        }
        else{
            let inserted = false
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
                arraySorted.push(array[x])
            }
        
            
        }
    }
    console.log(arraySorted)
}
                
sortArray([21, 30, 5, 16, 50]);



