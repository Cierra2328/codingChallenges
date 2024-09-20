#Coding Challenge #1
#  * **Write a function that reverses a string.** 
# This is a simple but challenging challenge that tests your understanding of strings and reversing them.

#function and console input to reverse a string in python
def reverseString(string):
    return string[::-1]

print(reverseString('hello world'))


#what if you can't use the slice method?

def reverseNoSlice(string):
    reversedString = []
    for letter in string:
        reversedString.append(letter)
    reversedString.reverse()
    revStr = ''.join(reversedString)
    return revStr

print(reverseNoSlice('hello world'))


###################################################################################
#Coding Challenge #2
#* **Write a function that calculates the Fibonacci sequence.** 
# The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers before it. 
# This challenge tests your understanding of recursion and the Fibonacci sequence.
def fibonacci():
    x = 0
    y = 1
    while y < 1000:
        k = x + y
        x = k + y
        y = x + k
        print(k, x, y) 

print(fibonacci())


####################################################################################
#Coding Challenge #3
#* **Check if a string is a palindrome.** 
# A palindrome is a string that reads the same backward as forward. 
# This challenge tests your understanding of strings and reversing them.

def palindrome(string):
    reversed = string[::-1]
    if reversed == string:
        return True
    else:
        return False

print(palindrome('racecar'))


####################################################################################
#Coding Challenge #4
#* **Write a function that sorts an array of numbers.** 
# This is a more challenging challenge that tests your understanding of sorting algorithms.

def sortArray(array):
    sortedArray = []
    for x in range(len(array)):
        if len(sortedArray) == 0:
                sortedArray.append(array[x])
        else:
            inserted = False
            for y in range(len(sortedArray)):
                if array[x] < sortedArray[y]:
                    sortedArray.insert(y, array[x])
                    inserted = True
                    break
            if not inserted:
                sortedArray.append(array[x])
    print(sortedArray)
                
sortArray([21, 30, 5, 16, 50])


################################################################################
#Coding Challenge #5
#* **Write a function that finds the maximum value in an array of numbers.** 
# This is a simple but challenging challenge that tests your understanding of arrays and finding the maximum value.

def findMax(array):
    num = array[0]
    for x in range(len(array)):
        if array[x] > num:
            num = array[x]
    
    print('The highest number in the list is:', num)

findMax([50, 35, 21, 60, 95, 100])


######################################################################################
#Coding Challenge #6
#* **Write a function that finds the minimum value in an array of numbers.** 
# This is similar to the previous challenge, but it tests your understanding of finding the minimum value.

def findMin(array):
    num = array[0]
    for x in range(len(array)):
        if array[x] < num:
            num = array[x]
    print('The lowest number in the list is:', num)

findMin([22, 34, 8, 100, 3, 20])


#########################################################################################
#Coding Challenge #7
#* **Write a function that checks if a number is prime.** A prime number is a number that is only divisible by itself and 1. 
# This challenge tests your understanding of prime numbers and the logic behind checking if a number is prime.

import math as m
def findPrime(num):
    if num <= 1:
        return False
    for x in range(2, int(m.sqrt(num)) + 1):
        if num % x == 0:
            return False
        
    return True        

print(findPrime(1049))

###########################################################################################
#Coding Challenge #8
#* **Find the factorial of a number.** 
# This is a classic coding challenge that tests your understanding of recursion and factorials.

def factorial(num):
    result = 1
    for x in range(num):
        result = result * num
        num = num - 1
        
    print(result)

factorial(6)