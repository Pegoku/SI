# FLAG
FLAG{EPIC_WIN_AL_PILPIL}

# Funcionament del codi:
- Llegir arxiu i convertirlo a llista de tuples amb `ast.literal_eval`
- Iterar sobre la llista, imprimint en terminal `.` canviant el background segons els valors RGB emprant el `truecolor` de la terminal de linux
- cada 929 pixels (amplada de l'imatge) es canvia la linea
