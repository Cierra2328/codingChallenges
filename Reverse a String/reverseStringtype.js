//Coding Challenge: * **Write a function that reverses a string.** 
// This is a simple but challenging challenge that tests your understanding of strings and reversing them.
//typescript function to reverse a string
function reverse(example) {
    return example.split('').reverse().join('');
}
console.log(reverse('hello world'));
//what if you can't use reverse?
function reverseNoReverse(example) {
    var split = example.split('');
    var array = [];
    split.forEach(function (element) {
        array.unshift(element);
    });
    var reversed = array.join('');
    return reversed;
}
console.log(reverseNoReverse('hello world'));
