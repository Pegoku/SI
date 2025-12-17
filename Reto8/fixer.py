from PIL import Image
import sys
import os

# TODO: El script está roto, necesito ayuda para arreglarlo!


image_path = sys.argv[1]
pic = Image.open(image_path)

width, height = pic.size

for x in range(width):
        for y in range(height):
                current_color = pic.getpixel((x, y))
                if current_color[0] == 255: # GREEN
                        pic.putpixel((x,y), (0,255,0))
                if current_color[1] == 255: # RED
                        pic.putpixel((x,y), (255,0,0))

pic.save(sys.argv[1] + ".arreglado.bmp")

