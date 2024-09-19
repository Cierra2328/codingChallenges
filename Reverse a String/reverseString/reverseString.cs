//Coding Challenge: * **Write a function that reverses a string.** 
// This is a simple but challenging challenge that tests your understanding of strings and reversing them.


//to run this file, you must build it with dotnet

//method to reverse a string in c#
using System;

class Reverse{
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

    public static void Main(string[] args){
        ReverseString("hello world");
        ReverseNoReverse("hello world");
    }
}