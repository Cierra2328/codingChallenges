//Coding Challenge: * **Write a function that reverses a string.** 
// This is a simple but challenging challenge that tests your understanding of strings and reversing them.

//javascript function to reverse a string
function reverseString(string){
    reversed = string.split('').reverse().join('');
    return reversed;
}

console.log(reverseString('hello world'));