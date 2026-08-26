from PIL import Image
import sys

def fix_logo_color(img_path, out_path, color=(92, 22, 32, 255)):
    try:
        img = Image.open(img_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            # If it's transparent, leave it
            if item[3] == 0:
                new_data.append(item)
            # If it's near white, change to the new color
            elif item[0] > 180 and item[1] > 180 and item[2] > 180:
                # We can do a blend or just solid color. Let's do solid color but preserve some opacity if needed.
                # Actually, replacing with maroon is safe.
                new_data.append((color[0], color[1], color[2], item[3]))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(out_path, "PNG")
        print(f"Successfully processed {img_path}")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

fix_logo_color("public/chicken-logo-transparent.png", "public/chicken-logo-transparent.png")
