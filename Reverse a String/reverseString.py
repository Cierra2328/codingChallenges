#Coding Challenge: * **Write a function that reverses a string.** 
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