# DineSpace Restaurant PWA

A modern Progressive Web App (PWA) for restaurant management built with React and Vite.

## Features

- 🏠 **Home Page**: Welcome section with restaurant story and highlights
- 🍽️ **Menu**: Interactive menu with categories, search, and featured items
- 📅 **Book Seats**: Calendar-based reservation system with time and party size selection
- 🪑 **Seating Arrangement**: Visual table layout with real-time availability
- ⏰ **Operating Hours**: Daily hours, contact information, and announcements
- 📱 **PWA Support**: Installable app with offline capabilities

## Technologies Used

- React 18
- React Router DOM
- Vite
- Vite PWA Plugin
- Lucide React (for icons)
- CSS3 with modern features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

Create a production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── Navigation.jsx      # Main navigation component
├── pages/
│   ├── Home.jsx           # Home page
│   ├── Menu.jsx           # Menu page
│   ├── BookSeats.jsx      # Booking page
│   ├── SeatingArrangement.jsx # Seating layout
│   └── OperatingHours.jsx # Hours and contact info
├── App.jsx                # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## PWA Features

This app includes comprehensive Progressive Web App capabilities:

### 🚀 **Installation**
- **Install Prompt**: Automatic prompt appears when PWA criteria are met
- **Add to Home Screen**: Available on all platforms (iOS, Android, Desktop)
- **Standalone Mode**: Runs like a native app without browser UI
- **App Icons**: Custom restaurant-themed icons (192x192, 512x512, Apple Touch)

### 📱 **Native App Experience**
- **Splash Screen**: Custom loading screen with app branding
- **Status Bar**: Integrated with app theme color (#ff6b6b)
- **Full Screen**: Immersive mobile experience
- **App Shortcuts**: Quick access to key features

### 🔄 **Offline Functionality**
- **Service Worker**: Precaches all static assets for offline use
- **Runtime Caching**: External images cached for 30 days
- **Fallback Pages**: Graceful offline experience
- **Background Sync**: Updates when connection is restored

### ⚡ **Performance Optimizations**
- **Code Splitting**: Optimized bundle loading
- **Image Caching**: Unsplash images cached locally
- **Prefetching**: Critical resources preloaded
- **Lazy Loading**: Images loaded on demand

### 🧪 **Testing PWA Features**

#### Desktop (Chrome/Edge):
1. Run `npm run preview`
2. Visit `http://localhost:4173`
3. Look for install banner or address bar install icon
4. Click "Install DineSpace" to add to desktop

#### Mobile (Chrome/Safari):
1. Visit the URL on mobile browser
2. Tap browser menu → "Add to Home Screen"
3. App icon appears on home screen
4. Tap to open in standalone mode

#### Offline Testing:
1. Install the app first
2. Open DevTools → Network → Check "Offline"
3. Refresh page - app continues working
4. Navigate between pages - all cached content available

### 📊 **PWA Audit Results**
- ✅ **Installable**: Meets all PWA criteria
- ✅ **Fast and Reliable**: Optimized loading performance
- ✅ **Engaging**: Native app-like experience
- ✅ **Accessible**: WCAG compliance for all users

## Customization

### Styling
- Modify `src/index.css` for global styles
- Component-specific styles are inline for easier maintenance

### Content
- Update menu items in `src/pages/Menu.jsx`
- Modify restaurant information in relevant components
- Customize operating hours in `src/pages/OperatingHours.jsx`

## Browser Support

This PWA works on all modern browsers that support:
- ES6+ features
- Service Workers
- Web App Manifest

## License

This project is licensed under the MIT License.
