import re

def scale_path(path_str, scale, dx, dy):
    # Regex to find commands and numbers
    # A path is a sequence of commands and coordinates
    # We can split by letters and numbers
    tokens = re.findall(r'[a-zA-Z]+|-?[0-9]*\.?[0-9]+', path_str)
    
    out = []
    is_x = True
    
    for token in tokens:
        if re.match(r'[a-zA-Z]+', token):
            out.append(token)
            if token.lower() == 'z':
                pass
            else:
                is_x = True
        else:
            val = float(token)
            if is_x:
                val = val * scale + dx
            else:
                val = val * scale + dy
            out.append(f"{val:g}")
            is_x = not is_x
            
    return " ".join(out)

original = "M 12 21.35 l -1.45 -1.32 C 5.4 15.36 2 12.28 2 8.5 C 2 5.42 4.42 3 7.5 3 c 1.74 0 3.41 0.81 4.5 2.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 c 0 3.78 -3.4 6.86 -8.55 11.54 L 12 21.35 z"
print(scale_path(original, 2.0, 0.5, 0.5))
