# LinkFro Landing Page

This is a standalone landing page for LinkFro that can be deployed independently from the main application.

## Features

- Fully responsive design
- Mobile-friendly navigation with hamburger menu
- Interactive hero section with tabs
- Navbar that changes on scroll
- Minimal dependencies (pure HTML, CSS, JavaScript)
- No build process required
- Self-contained in a single folder

## Deployment

This landing page can be deployed to any static hosting service:

1. **Vercel/Netlify**: Simply connect your repository and deploy the `front-page` folder
2. **GitHub Pages**: Push this folder to a GitHub repository and enable GitHub Pages
3. **Any static hosting**: Upload these files to any web server
4. **Local testing**: Simply open `index.html` in a browser

## Customization

To customize this landing page:

1. Modify `index.html` to change the content
2. Update `styles.css` to change the styling
3. Adjust `app.js` for any interactive functionality

## Assets

All images are loaded from external URLs to keep this package lightweight. For production use, you may want to:
1. Download the images
2. Place them in an `assets` folder
3. Update the image paths in the HTML and CSS files

## Browser Support

This landing page works in all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

For older browsers, additional polyfills may be required.

## Folder Structure

```
front-page/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── app.js              # JavaScript functionality
├── favicon.ico         # Website favicon
└── README.md           # This file
```

## Deployment-Ready

This folder is completely self-contained and can be deployed as a standalone website without any dependencies on the main application.