width = 569

import ast
import re

def read_pixels(path):
    """Read RGB pixels from `path`.

    Supports these formats:
    - a Python literal list/tuple of (r,g,b) entries (via ast.literal_eval)
    - a single-line sequence like "[(0,0,0), (0, 0, 2), ...]"
    - one pixel per line as "r,g,b"
    Returns a list of (r, g, b) integer tuples.
    """
    with open(path, 'r') as f:
        content = f.read()

    pixels = []

    # Try exact Python literal parsing first (most robust if the file contains a list)
    try:
        obj = ast.literal_eval(content)
        if isinstance(obj, (list, tuple)):
            for item in obj:
                if isinstance(item, (list, tuple)) and len(item) >= 3:
                    try:
                        pixels.append((int(item[0]), int(item[1]), int(item[2])))
                    except Exception:
                        # skip non-integer entries
                        continue
    except Exception:
        pass

    # If literal_eval didn't find anything, try parenthesized tuples via regex
    if not pixels:
        matches = re.findall(r"\(\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*\)", content)
        if matches:
            pixels = [tuple(map(int, m)) for m in matches]

    # Lastly, try newline-separated comma values like "r,g,b" per line
    if not pixels:
        for line in content.splitlines():
            line = line.strip()
            if not line:
                continue
            parts = [p.strip() for p in line.split(',')]
            if len(parts) >= 3:
                try:
                    pixels.append((int(parts[0]), int(parts[1]), int(parts[2])))
                except Exception:
                    continue

    return pixels


pixels = read_pixels('data')

for r in range(1,929):
    result = ''
    for i in range(min(width, len(pixels))):
        r, g, b = pixels[i*r]
        result += "\033[48;2;{};{};{}m.\033[0m".format(r, g, b)
    print(result)
