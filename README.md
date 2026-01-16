# Al Reef Restaurant Website

A modern, responsive restaurant website for Al Reef Restaurant, featuring authentic Middle Eastern cuisine in Abu Dhabi, UAE.

## Features

### 🎨 Design & Layout
- Modern, clean design inspired by professional restaurant websites
- Fully responsive design for all devices (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional color scheme with orange accent (#FF6B35)

### 📄 Pages
- **Home**: Hero section, features, popular dishes, testimonials
- **Menu**: Interactive menu with categories (Appetizers, Main Courses, Grills, Rice Dishes, Desserts, Beverages)
- **About Us**: Restaurant story, values, team, awards
- **Contact**: Contact form, location map, FAQ section
- **Reservations**: Online booking system with date/time selection
- **Gallery**: Image gallery with filtering and lightbox
- **Login**: User authentication system

### ⚡ Interactive Features
- Mobile navigation menu with hamburger toggle
- Smooth scrolling navigation
- Form validation with real-time feedback
- Image lazy loading
- Cookie consent banner
- Scroll-to-top button
- FAQ accordion
- Gallery filtering and lightbox modal
- Loading spinners for async operations

### 🛠 Technical Features
- Semantic HTML5 structure
- Modern CSS with Flexbox and Grid
- Vanilla JavaScript (no dependencies required)
- Font Awesome icons
- Google Fonts (Roboto)
- SEO-friendly structure
- Accessibility considerations

## Project Structure

```
al reef/
├── index.html          # Homepage
├── menu.html           # Menu page
├── about.html          # About us page
├── contact.html        # Contact page
├── reservation.html    # Reservation booking
├── gallery.html        # Photo gallery
├── login.html          # Login/Signup
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, but recommended)

### Installation

1. Clone or download the project files
2. Place all files in your web directory
3. Open `index.html` in your browser

### Using a Local Server

For development, it's recommended to use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Customization

### Branding
- Replace placeholder images with your actual restaurant photos
- Update colors in `styles.css` (main color: #FF6B35)
- Modify contact information in the header and footer

### Menu Items
- Update menu items in `menu.html`
- Adjust prices and descriptions
- Add/remove categories as needed

### Contact Information
- Update phone numbers, email addresses, and location
- Modify opening hours
- Add social media links

### Forms
- Forms are currently set up for demonstration
- Integrate with your preferred backend service
- Update form validation rules as needed

## Deployment

### Static Hosting
This website can be deployed on any static hosting service:

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Import the project from GitHub
- **GitHub Pages**: Enable Pages in your repository
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Traditional Hosting**: Upload files via FTP

### Deployment Steps

1. **Prepare for production:**
   - Replace all placeholder images
   - Test all forms and links
   - Update meta tags and SEO information

2. **Deploy to Netlify:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod --dir .
   ```

3. **Deploy to Vercel:**
   - Connect your GitHub repository
   - Vercel will automatically deploy on push

4. **Deploy to GitHub Pages:**
   - Go to repository Settings > Pages
   - Select source branch (main/master)
   - Choose root folder as source

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Optimized images with lazy loading
- Minified CSS and JavaScript
- Efficient animations using CSS transforms
- Semantic HTML for better SEO

## Security Considerations

- Form validation on both client and server side
- HTTPS recommended for production
- Secure cookie handling
- Input sanitization for forms

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions:
- Email: info@alreefrestaurant.com
- Phone: +971 58 512 2126
- Visit our contact page

---

**Al Reef Restaurant** - Authentic Middle Eastern Cuisine in the Heart of Abu Dhabi
