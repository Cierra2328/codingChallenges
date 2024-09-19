#Coding Challenge: * **Write a function that reverses a string.** 
# This is a simple but challenging challenge that tests your understanding of strings and reversing them.

#function and console input to reverse a string in python
def reverse(string):
    return string[::-1]

string = input('what is your string?\n')
reversed = reverse(string)
print(reversed)