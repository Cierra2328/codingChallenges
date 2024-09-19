//Coding Challenge: * **Write a function that reverses a string.** 
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