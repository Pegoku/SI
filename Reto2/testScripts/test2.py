from PIL import Image
 
#foto = Image.open('ruta_y_nombre_del_archivo')
with open ('data', 'r') as foto: 

    #datos = list(foto.getdata())
 
'''
la linea anterior tambien podria escribirse como:
 
datos = list(Image.Image.getdata(foto))'''
 
#al finalizar cerramos el objeto instanciado
 
foto.close()
