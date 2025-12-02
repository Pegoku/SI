# RETO 7
flag{llqZQYlNoiqjoEvFzb8AW8I7Y6}

# Procedure
First, I analyzed the HTML code, and found there was JS embedded. The main scripts that caught my mind were:
- https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js, which told me there was some sort of encryption.
- function flag(value0,value1,value2,value3,value4,value5){ with many IFs inside

After analyzing the `flag` function, I found out it was just an obfuscated way to requiere the dice numbers to be exact ones.
After referse enginieering the conditionals, I arrived to this values:
```
value0 = 5;
value1 = 3;
value2 = 4;
value3 = 6;
value4 = 1;
value5 = 2;
```

And when I overrided them in the flag function, I got the `flag{llqZQYlNoiqjoEvFzb8AW8I7Y6}`

