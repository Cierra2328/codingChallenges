<?php 
//Coding Challenge: * **Write a function that reverses a string.** 
// This is a simple but challenging challenge that tests your understanding of strings and reversing them.

    //reversing string with built in function
    function reverseString($sentence): string{
        $reversedString = strrev($sentence);
        return $reversedString;

    }
    //reversing string without built in function
    function reverseNoReverse($sentence): string{
        $stringArray = preg_split('//u', $sentence, -1, PREG_SPLIT_NO_EMPTY);
        $reversedArray = [];
        foreach($stringArray as $x){
            array_unshift($reversedArray, $x);
        }
        $newString = join('', $reversedArray);
        return $newString;
    }
    

echo 'with strrev ' , reverseString("hello world");
echo "\n";
echo 'without strrev ' , reverseNoReverse('hello world');


