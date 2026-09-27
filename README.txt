K4 KOREA — IMAGE ASSET GUIDE
=============================

Version: v1.0.3
Purpose: Launch website image preparation

GENERAL RULES
-------------
- Use JPG or WebP for photographic images.
- Use PNG only when transparency is genuinely required.
- Keep product images consistent in crop, scale and lighting.
- Do not put text/logos into product images unless the creative specifically requires it.
- Keep original high-resolution masters separately; these are the web-export sizes.

FOLDER STRUCTURE
----------------
assets/
└── images/
    ├── hero/
    │   ├── hero-desktop.jpg
    │   └── hero-mobile.jpg
    │
    ├── products/
    │   ├── falcon-elite.jpg
    │   ├── falcon-pro.jpg
    │   └── falcon-club.jpg
    │
    ├── brand/
    │   └── k4-campaign.jpg
    │
    └── testimonials/
        ├── testimonial-01.jpg
        ├── testimonial-02.jpg
        └── ...

1. HERO — DESKTOP
-----------------
Filename:
hero-desktop.jpg

Recommended dimensions:
1920 × 800 px

Aspect ratio:
2.4:1

Use:
Desktop/tablet hero banner.

Notes:
- Keep the important subject away from extreme edges.
- The site uses object-fit: cover.
- A wider master can be supplied if the original photography is higher resolution.


2. HERO — MOBILE
----------------
Filename:
hero-mobile.jpg

Recommended dimensions:
1080 × 1350 px

Aspect ratio:
4:5

Use:
Mobile hero banner.

Do I need two hero images?
YES, if the desktop composition and mobile composition need different cropping.

You do NOT need two images if the same photograph still looks good when cropped vertically.

The code already supports a separate mobile image through <picture>.


3. FALCON ELITE
---------------
Filename:
falcon-elite.jpg

Recommended dimensions:
1200 × 1200 px

Aspect ratio:
1:1

Use:
Falcon Elite product card.

Composition:
- Product centred.
- Leave comfortable space around the tube.
- Keep product scale consistent with Pro and Club.


4. FALCON PRO
-------------
Filename:
falcon-pro.jpg

Recommended dimensions:
1200 × 1200 px

Aspect ratio:
1:1

Use:
Falcon Pro product card.


5. FALCON CLUB
--------------
Filename:
falcon-club.jpg

Recommended dimensions:
1200 × 1200 px

Aspect ratio:
1:1

Use:
Falcon Club product card.


6. BRAND / CAMPAIGN IMAGE
-------------------------
Filename:
k4-campaign.jpg

Recommended dimensions:
1920 × 900 px

Aspect ratio:
approximately 2.13:1

Status:
HIDDEN IN THE CURRENT LAUNCH VERSION.

Use later:
Large visual brand/image-break section between major content blocks.


7. TESTIMONIAL PHOTOS
---------------------
Suggested filenames:
testimonial-01.jpg
testimonial-02.jpg
testimonial-03.jpg
etc.

Recommended dimensions:
600 × 600 px

Aspect ratio:
1:1

Status:
TESTIMONIAL SECTION IS CURRENTLY HIDDEN.

Use later:
Customer/player portraits.


LOGO
----
Current file:
assets/logo/k4-korea-logo.jpg

Recommended future replacement:
assets/logo/k4-korea-logo.svg

A transparent SVG is preferred for the final brand asset.


CTA
---
The primary hero CTA is:

WhatsApp Us for Bulk Orders →

Replace the placeholder WhatsApp number in index.html before launch.


IMPORTANT
---------
The current website intentionally hides:
- Testimonials
- K4 campaign/brand image section

They remain structurally present in the HTML so they can be re-enabled later without rebuilding the page.
