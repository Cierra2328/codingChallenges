

using System;

class Challenge{

    //Coding Challenge #1
    //* **Write a function that reverses a string.** 
    // This is a simple but challenging challenge that tests your understanding of strings and reversing them.
    public static void ReverseString(string sentence){
        char[] letters = sentence.ToCharArray();
        Array.Reverse(letters);
        string reversed = new string(letters);
        Console.WriteLine(reversed);

    }

    //without using reverse
    public static void ReverseNoReverse(string sentence){
        char[] letters = sentence.ToCharArray();
        List<char> lettersRev = new List<char>();
        foreach(char element in letters){
            lettersRev.Insert(0, element);
        }
        string result = new string(lettersRev.ToArray());
        Console.WriteLine(result);
    }

    /////////////////////////////////////////////////////////////
    /*Coding Challenge #2
    * **Write a function that calculates the Fibonacci sequence.** 
    The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers before it. 
    This challenge tests your understanding of recursion and the Fibonacci sequence.*/

    public static void fibonacci(){
        int x = 0;
        int y = 1;
        while(y<1000){
            int k = x + y;
            x = k + y;
            y = x + k;
             Console.WriteLine($"{k}, {x}, {y}");
        }
    }


    /////////////////////////////////////////////////////////////
    /*Coding Challenge #3
    * **Check if a string is a palindrome.** 
    A palindrome is a string that reads the same backward as forward. 
    This challenge tests your understanding of strings and reversing them.*/

public static Boolean palindrome(string word){
    char[] arr = word.ToCharArray();
    Array.Reverse(arr);
    string reversed = new string(arr);
    if(reversed.ToLower() == word.ToLower()){
        return true;
    }
    else{
        return false;
    }
    
}

    /////////////////////////////////////////////////////////////
    /*Coding Challenge #4
    * **Write a function that sorts an array of numbers.** 
    This is a more challenging challenge that tests your understanding of sorting algorithms.*/

    public static void sortArray(int[] arr){
        List<int> arraySorted = new List<int>();
        for(int x=0; x< arr.Length; x++){
            if(arraySorted.Count == 0){
                arraySorted.Add(arr[x]);
            }
            else{
                bool inserted = false;
                for(int y=0; y<arraySorted.Count;y++){
                    if(arr[x] < arraySorted[y]){
                        List<int> newArray = arraySorted.Take(y).ToList();
                        newArray.Add(arr[x]); 
                        newArray.AddRange(arraySorted.Skip(y)); 
                        arraySorted = newArray;
                        inserted = true;
                        break;
                    }
                }
                if(!inserted){
                    arraySorted.Add(arr[x]);
                }
            }
        }
        Console.WriteLine(string.Join(", ", arraySorted));  
     }


     ///////////////////////////////////////////////////////////////////////
    /*Coding Challenge #5
    * **Write a function that finds the maximum value in an array of numbers.** 
    This is a simple but challenging challenge that tests your understanding of arrays and finding the maximum value.*/

    public static void findMax(int[] arr){
        int num = arr[0];
        for(int x = 0;x<arr.Length;x++){
        if(arr[x] > num){
            num = arr[x];
        }
    }
    Console.WriteLine($"The highest number in the array is: {num}");

    }

    ///////////////////////////////////////////////////////////////////
    /*Coding Challenge #6
    * **Write a function that finds the minimum value in an array of numbers.** 
    This is similar to the previous challenge, but it tests your understanding of finding the minimum value.*/

    public static void findMin(int[] arr){
        int num = arr[0];
        for(int x=0;x<arr.Length;x++){
            if(arr[x] < num){
                num = arr[x];
            }
        }
        Console.WriteLine($"The lowest number in the array is: {num}");
    }



    //////////////////////////////////////////////////////////////////
    /*Coding Challenge #7
    #* **Write a function that checks if a number is prime.** A prime number is a number that is only divisible by itself and 1. 
    # This challenge tests your understanding of prime numbers and the logic behind checking if a number is prime.*/

    public static bool findPrime(int num){
        if(num <= 1){
            return false;
        }
        for(int x=2; x <= Math.Floor(Math.Sqrt(num));x++){
            if(num % x == 0){
                return false;
            }
        }
        return true;
    }    

    //////////////////////////////////////////////////////////////////
    /*Coding Challenge #8
    * **Find the factorial of a number.** 
    This is a classic coding challenge that tests your understanding of recursion and factorials.*/

    public static void factorial(int num){
        int result = 1;
        for(int x = 0; x<num; x++){
            result = result * num;
            num -= 1;
        }
        Console.WriteLine(result);
    }



    public static void Main(string[] args){
        ReverseString("hello world");
        ReverseNoReverse("hello world");
        fibonacci();
        Console.WriteLine(palindrome("Racecar"));
        sortArray(new int[] {21, 30, 5, 16, 50});
        findMax(new int[] {50, 35, 21, 60, 95, 100});
        findMin( new int[] {22, 34, 8, 100, 3, 20});
        Console.WriteLine(findPrime(1049));
        factorial(6);
    }
}