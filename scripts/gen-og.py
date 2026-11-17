from PIL import Image, ImageDraw, ImageFont
import os, math

def font(sz, bold=True):
    p = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
    return ImageFont.truetype(p, sz) if os.path.exists(p) else ImageFont.load_default()

def starburst(d, cx, cy, r, color):
    for i in range(12):
        a = math.radians(i * 30)
        r2 = r if i % 2 == 0 else r * 0.7
        d.line([cx + 5 * math.cos(a), cy + 5 * math.sin(a), cx + r2 * math.cos(a), cy + r2 * math.sin(a)], fill=color, width=8)
    d.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=color)

cards = [
    ("og-home.jpg", "#0b0b0b", "Empowering Brands Through", "Creative Solutions"),
    ("og-services.jpg", "#a3e635", "Our Services", "UI/UX - Web - 3D - Motion"),
    ("og-projects.jpg", "#0b0b0b", "Recent Work", "Ideas Into Masterpieces"),
    ("og-about.jpg", "#0b0b0b", "About Creatix", "A Compact Team, Big Ideas"),
    ("og-team.jpg", "#a3e635", "Meet the Team", "Designers - Developers - Artists"),
    ("og-contact.jpg", "#0b0b0b", "Get in Touch Today", "Start Your Project"),
]
for name, bg, l1, l2 in cards:
    dark = bg == "#0b0b0b"
    im = Image.new("RGB", (1200, 630), bg)
    d = ImageDraw.Draw(im)
    starburst(d, 1080, 110, 46, "#a3e635" if dark else "#0b0b0b")
    d.text((80, 70), "Creatix", font=font(44), fill="#a3e635" if dark else "#0b0b0b")
    d.text((80, 240), l1, font=font(76), fill="#ffffff" if dark else "#0b0b0b")
    d.text((80, 340), l2, font=font(76), fill="#a3e635" if dark else "#0b0b0b")
    d.text((80, 520), "creatix.pages.dev", font=font(30, bold=False), fill="#ffffff99" if dark else "#0b0b0b99")
    im.save(f"public/images/{name}", quality=88)
    print(name, "ok")
