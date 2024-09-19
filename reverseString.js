//Coding Challenge: * **Write a function that reverses a string.** 
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