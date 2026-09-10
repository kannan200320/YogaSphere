import zlib
import struct
import math

def generate_headphones_png(filename, size=64):
    # Create RGBA buffer
    # 64x64 image
    img = [[(0, 0, 0, 0) for _ in range(size)] for _ in range(size)]
    
    # We want to draw the headphones icon:
    # viewBox is 24x24, center is (12, 12).
    # Scale to size with padding:
    scale = (size - 16) / 24.0
    ox = 8.0
    oy = 8.0

    # Let's use Pillow if available, otherwise pure Python drawing
    try:
        from PIL import Image, ImageDraw
        pil_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(pil_img)
        
        # Draw on 4x supersampled canvas for ultra-crisp antialiasing
        big_size = size * 4
        s = (big_size - 64) / 24.0
        bx = 32.0
        by = 32.0
        
        big_img = Image.new("RGBA", (big_size, big_size), (0, 0, 0, 0))
        bdraw = ImageDraw.Draw(big_img)
        
        color = (124, 58, 237, 255) # #7C3AED
        stroke_w = int(round(2.0 * s))
        
        # Arc headband: center at x=12, y=12, radius=9
        # from angle 180 to 0 (top half)
        cx, cy, r = bx + 12 * s, by + 12 * s, 9 * s
        bbox = [cx - r, cy - r, cx + r, cy + r]
        bdraw.arc(bbox, start=180, end=0, fill=color, width=stroke_w)
        
        # Left ear cup:
        # starts at x=3, y=12 down to y=19, round rect from x=3 to 7, y=14 to 20
        # In SVG: v7 a1 1 0 0 0 1 1 h3 a1 1 0 0 0 1-1 v-4 a1 1 0 0 0-1-1 H4 v-2
        # Ear cups are rounded rectangles:
        # Left cup: x=3*s + bx to 7*s + bx, y=14*s + by to 20*s + by
        # Headband line: from (3*s+bx, 12*s+by) down to (3*s+bx, 14*s+by)
        bdraw.line([(bx + 3*s, by + 12*s), (bx + 3*s, by + 15*s)], fill=color, width=stroke_w)
        # Right headband line: from (21*s+bx, 12*s+by) down to (21*s+bx, 15*s+by)
        bdraw.line([(bx + 21*s, by + 12*s), (bx + 21*s, by + 15*s)], fill=color, width=stroke_w)
        
        # Left ear cushion rounded rectangle
        # x between 3 and 7, y between 14 and 20
        cup_radius = 2.0 * s
        left_cup = [bx + 2.5*s, by + 14*s, bx + 7*s, by + 20*s]
        bdraw.rounded_rectangle(left_cup, radius=cup_radius, fill=color)
        
        # Right ear cushion rounded rectangle
        # x between 17 and 21, y between 14 and 20
        right_cup = [bx + 17*s, by + 14*s, bx + 21.5*s, by + 20*s]
        bdraw.rounded_rectangle(right_cup, radius=cup_radius, fill=color)
        
        # Resize down with LANCZOS
        final_img = big_img.resize((size, size), Image.Resampling.LANCZOS)
        final_img.save(filename, "PNG")
        print(f"Successfully generated {filename} with Pillow ({size}x{size})")
        return
    except ImportError:
        pass

    # Pure Python fallback using zlib and struct
    # Rasterize headband arc and ear pads
    width = size
    height = size
    color = (124, 58, 237) # #7C3AED
    
    # Distance to arc: center (32, 32), r=22
    cx, cy, r = size / 2.0, size / 2.0, size * 0.35
    th = size * 0.08
    
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0) # Filter byte: None
        for x in range(width):
            dx = x - cx
            dy = y - cy
            dist = math.sqrt(dx*dx + dy*dy)
            
            alpha = 0.0
            # Headband: y < cy + r * 0.3 and abs(dist - r) <= th
            if y <= cy + 2 and abs(dist - r) <= th:
                edge = abs(dist - r)
                if edge <= th - 1:
                    alpha = 1.0
                else:
                    alpha = max(0.0, min(1.0, th - edge))
            
            # Left ear pad: x between 0.12*size and 0.28*size, y between 0.55*size and 0.85*size
            lx1, lx2 = size * 0.12, size * 0.30
            ly1, ly2 = size * 0.55, size * 0.82
            if lx1 <= x <= lx2 and ly1 <= y <= ly2:
                # Rounded box
                cr = size * 0.06
                px = min(max(x, lx1 + cr), lx2 - cr)
                py = min(max(y, ly1 + cr), ly2 - cr)
                pdist = math.sqrt((x - px)**2 + (y - py)**2)
                if pdist <= cr:
                    alpha = max(alpha, 1.0 - max(0.0, pdist - cr + 1))
            
            # Right ear pad: x between 0.70*size and 0.88*size, y between 0.55*size and 0.85*size
            rx1, rx2 = size * 0.70, size * 0.88
            if rx1 <= x <= rx2 and ly1 <= y <= ly2:
                cr = size * 0.06
                px = min(max(x, rx1 + cr), rx2 - cr)
                py = min(max(y, ly1 + cr), ly2 - cr)
                pdist = math.sqrt((x - px)**2 + (y - py)**2)
                if pdist <= cr:
                    alpha = max(alpha, 1.0 - max(0.0, pdist - cr + 1))
            
            # Headband connecting lines
            if (size * 0.14 <= x <= size * 0.22) and (cy <= y <= ly1):
                alpha = max(alpha, 1.0)
            if (size * 0.78 <= x <= size * 0.86) and (cy <= y <= ly1):
                alpha = max(alpha, 1.0)
                
            a_byte = int(max(0.0, min(1.0, alpha)) * 255)
            raw_data.extend([color[0], color[1], color[2], a_byte])
            
    # PNG format
    png = bytearray(b'\x89PNG\r\n\x1a\n')
    
    # IHDR
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    png.extend(struct.pack('>I', 13) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc))
    
    # IDAT
    compressed = zlib.compress(raw_data)
    idat_crc = zlib.crc32(b'IDAT' + compressed)
    png.extend(struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', idat_crc))
    
    # IEND
    iend_crc = zlib.crc32(b'IEND')
    png.extend(struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc))
    
    with open(filename, 'wb') as f:
        f.write(png)
    print(f"Successfully generated {filename} with pure Python ({width}x{height})")

if __name__ == "__main__":
    import sys
    out_file = r"c:\Users\KANNAN\Desktop\YogaSphere\assets\images\favicon.png"
    generate_headphones_png(out_file, 64)
