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


