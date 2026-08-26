from PIL import Image
import sys

def remove_black_background(img_path, out_path, tolerance=30):
    try:
        img = Image.open(img_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            # Check if pixel is near black
            if item[0] < tolerance and item[1] < tolerance and item[2] < tolerance:
                # Make it transparent
                new_data.append((0, 0, 0, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(out_path, "PNG")
        print(f"Successfully processed {img_path}")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

remove_black_background("public/chicken-logo.png", "public/chicken-logo-transparent.png")
