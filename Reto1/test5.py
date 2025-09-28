import ast

width = 569

with open('data', 'r') as file:
    a = file.read()
    ab = ast.literal_eval(a)
#print(b)
#print(type(b))

loopIt = 0

while True:
    for i in range(width):
        r, g, b = ab[i+width*loopIt]
        print(f"\033[48;2;{r};{g};{b}m.\033[0m", end='')
        #print("R:", r, "G:", g, "B:", b, end='')
    print(loopIt)
    loopIt += 1
