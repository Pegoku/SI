from PIL import Image
import ast
data = ast.literal_eval(open("data").read())

img = Image.new("RGB", (569, 929))
img.putdata([tuple(map(int, p[:3])) for row in data for p in row])
img.save("output.png")
