width, height = (569, 929)

new_image = Image.new('RGB', (width, height))
with open ('data', 'r') as data:
    data = ast.literal_eval(f.read()) 

for y in range(height):
    for x in range(width):

        data[(x, y)] = (r, g, b)

new_image.save('foo.png', 'png')  # or another format
