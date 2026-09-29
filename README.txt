# SinkGuardia — Affiliate-ready website

## Folder structure
- `index.html` — home page
- `about.html` — about page
- `contact.html` — contact page
- `disclosure.html` — affiliate disclosure
- `privacy.html` — starter privacy policy
- `terms.html` — starter terms
- `css/style.css` — design
- `js/products.js` — product catalog + affiliate URLs
- `js/script.js` — search, filters and affiliate buttons

## Add your affiliate products
Open `js/products.js` and replace each:
`affiliateUrl:'PASTE_AFFILIATE_URL_HERE'`

Example:
`affiliateUrl:'https://www.amazon.in/dp/PRODUCT_ID/?tag=YOURTAG-21'`

The button automatically opens active affiliate links in a new tab with `rel="sponsored nofollow noopener"`.

## Before publishing
1. Join your chosen affiliate program/network.
2. Replace all placeholder affiliate URLs.
3. Replace `YOUR-EMAIL@example.com` in `contact.html`.
4. Verify product names, prices, ratings and descriptions against the retailer/product page.
5. Replace the starter privacy/terms text with policies appropriate to your actual tools and jurisdiction.
6. Add a favicon/logo and real product images if desired.
7. Upload the whole folder while preserving `css/` and `js/` paths.

## Important
The included product prices and ratings are starter/demo data. They are not verified live retailer data.
