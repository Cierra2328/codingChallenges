#function and console input to reverse a string in python
def reverse(string):
    return string[::-1]

string = input('what is your string?\n')
reversed = reverse(string)
print(reversed)