"""
Generate simple app icons for PWA (192x192 and 512x512).
Uses only Python standard library - no external dependencies needed.
Creates minimal valid PNG icons with a simple colored design.
"""

import struct
import zlib
import os

def create_png(width, height, r, g, b):
    """Create a minimal valid PNG with a solid color."""
    
    # Build raw image data (RGBA)
    raw_data = b''
    for y in range(height):
        raw_data += b'\x00'  # filter byte
        for x in range(width):
            # Simple design: red background with white center
            cx, cy = width // 2, height // 2
            dx, dy = abs(x - cx), abs(y - cy)
            dist = (dx*dx + dy*dy) ** 0.5
            max_dist = (cx*cx + cy*cy) ** 0.5
            
            if dist < max_dist * 0.35:
                # Center circle - slightly lighter
                raw_data += bytes([min(255, r + 40), min(255, g + 40), min(255, b + 40), 255])
            elif dist < max_dist * 0.5:
                # Inner area
                raw_data += bytes([r, g, b, 255])
            elif x < 30 or x >= width - 30 or y < 30 or y >= height - 30:
                # Rounded corners (darken edges)
                raw_data += bytes([max(0, r - 30), max(0, g - 30), max(0, b - 30), 255])
            else:
                raw_data += bytes([r, g, b, 255])
    
    def chunk(chunk_type, data):
        c = chunk_type + data
        crc = struct.pack('>I', zlib.crc32(c) & 0xffffffff)
        return struct.pack('>I', len(data)) + c + crc
    
    signature = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0))
    compressed = zlib.compress(raw_data)
    idat = chunk(b'IDAT', compressed)
    iend = chunk(b'IEND', b'')
    
    return signature + ihdr + idat + iend

def main():
    icons_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'icons')
    os.makedirs(icons_dir, exist_ok=True)
    
    # Red theme color (#d63031)
    r, g, b = 214, 48, 49
    
    # Generate 192x192 icon
    png_192 = create_png(192, 192, r, g, b)
    with open(os.path.join(icons_dir, 'icon-192.png'), 'wb') as f:
        f.write(png_192)
    
    # Generate 512x512 icon
    png_512 = create_png(512, 512, r, g, b)
    with open(os.path.join(icons_dir, 'icon-512.png'), 'wb') as f:
        f.write(png_512)
    
    print("Ikon berhasil dibuat!")
    print(f"  - {os.path.join(icons_dir, 'icon-192.png')} ({len(png_192)} bytes)")
    print(f"  - {os.path.join(icons_dir, 'icon-512.png')} ({len(png_512)} bytes)")

if __name__ == '__main__':
    main()
