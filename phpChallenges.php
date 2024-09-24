<?php 
//Coding Challenge #1
//* **Write a function that reverses a string.** 
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
echo 'without strrev ' , reverseNoReverse("hello world");
echo "\n";


/////////////////////////////////////////////////////////////
/*Coding Challenge #2
* **Write a function that calculates the Fibonacci sequence.** 
 The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers before it. 
 This challenge tests your understanding of recursion and the Fibonacci sequence.*/

 function fibonacci(){
    $x = 0;
    $y = 1;
    while ($y < 1000){
        $k = $x + $y;
        $x = $k + $y;
        $y = $x + $k;
        echo "$k, $x, $y \n";
    }
    
 }
fibonacci();


/////////////////////////////////////////////////////////////
/*Coding Challenge #3
* **Check if a string is a palindrome.** 
 A palindrome is a string that reads the same backward as forward. 
 This challenge tests your understanding of strings and reversing them.*/

 function palindrome($word){
    $reversed = strrev($word);
    if ($reversed === $word){
        return true;
    }
    else{
        return false;
    }
 }
 $result = palindrome('racecar');

 echo $result ? 'true' : 'false';


 /*Coding Challenge #4
* **Write a function that sorts an array of numbers.** 
 This is a more challenging challenge that tests your understanding of sorting algorithms.*/

 function sortArray($array){
    $arraySorted = [];
    for ($x=0; $x< count($array); $x++){
        if(count($arraySorted) === 0){
                array_push($arraySorted, $array[$x]);
        }
        else{
            $inserted = false;
            for($y=0; $y<count($arraySorted);$y++){
                if ($array[$x] < $arraySorted[$y]){
                    $newArray = array_merge(
                        array_slice($arraySorted, 0, $y),
                        array($array[$x]),
                        array_slice($arraySorted, $y));
                    $arraySorted = $newArray;
                    $inserted = true;
                    break;
                }
            }
            
            if (!$inserted){
                array_push($arraySorted, $array[$x]);
            }
        
            
        }
    }
    print_r($arraySorted);
}
                
sortArray([21, 30, 5, 16, 50]);


///////////////////////////////////////////////////////////////////////
/*Coding Challenge #5
* **Write a function that finds the maximum value in an array of numbers.** 
 This is a simple but challenging challenge that tests your understanding of arrays and finding the maximum value.*/

 function findMax($array){
    $num = $array[0];
    for($x = 0;$x<count($array);$x++){
        if($array[$x] > $num){
            $num = $array[$x];
        }
    }
    
    echo "The highest number in the array is: $num \n";
}

findMax([50, 35, 21, 60, 95, 100]);


///////////////////////////////////////////////////////////////////
/*Coding Challenge #6
* **Write a function that finds the minimum value in an array of numbers.** 
 This is similar to the previous challenge, but it tests your understanding of finding the minimum value.*/

 function findMin($array){
    $num = $array[0];
    for($x=0;$x<count($array);$x++){
        if ($array[$x] < $num){
            $num = $array[$x];
        }
    }
    echo "The lowest number in the list is: $num \n";
 }

findMin([22, 34, 8, 100, 3, 20]);


//////////////////////////////////////////////////////////////////
/*Coding Challenge #7
#* **Write a function that checks if a number is prime.** A prime number is a number that is only divisible by itself and 1. 
# This challenge tests your understanding of prime numbers and the logic behind checking if a number is prime.*/

function findPrime($num){
    if($num <= 1){
        return false;
    }
    for ($x = 2; $x <= floor(sqrt($num)); $x++){
        if($num % $x === 0){
            return false;
        }
    }
    return true;   
}     

$result = findPrime(1049);

 echo $result ? "true \n" : "false \n";

 //////////////////////////////////////////////////////////////////
/*Coding Challenge #8
* **Find the factorial of a number.** 
 This is a classic coding challenge that tests your understanding of recursion and factorials.*/

function factorial($num){
    $result = 1;
    for($x = 0; $x<$num;$x++){
        $result = $result * $num;
        $num = $num - 1;
    }
        
    echo $result;
}

factorial(6);


