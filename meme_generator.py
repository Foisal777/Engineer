#!/usr/bin/env python3
"""
Meme Generator Tool for Moha-Engineering: Reloaded
A satirical tool to generate memes against censorship.
Uses Python for image processing.
"""

from PIL import Image, ImageDraw, ImageFont
import random

def generate_meme(text, output_file="meme.png"):
    # Create a simple meme image
    img = Image.new('RGB', (400, 300), color=(0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Try to use a font, fallback to default
    try:
        font = ImageFont.truetype("arial.ttf", 20)
    except:
        font = ImageFont.load_default()
    
    # Draw text
    draw.text((10, 10), text, fill=(255, 255, 255), font=font)
    
    # Add some random effects for satire
    for _ in range(10):
        x = random.randint(0, 400)
        y = random.randint(0, 300)
        draw.text((x, y), "CENSORED", fill=(255, 0, 0), font=font)
    
    img.save(output_file)
    print(f"Meme generated: {output_file}")

if __name__ == "__main__":
    generate_meme("Load Shedding is just a feature, not a bug!")