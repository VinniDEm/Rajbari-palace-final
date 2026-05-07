# Rajbari Palace — Luxury Boutique Hotel Booking Engine

A modern, responsive hotel booking website built for **Rajbari Palace**, a luxury boutique hotel in Deoghar, Jharkhand. Features direct booking integration, dynamic image galleries, dark/light theme toggle, and event inquiry management.

**Live Demo:** _[Vercel deployment URL will go here]_

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19 + Vite 8 |
| **Styling** | Vanilla CSS with CSS Custom Properties (dark/light theming) |
| **Backend** | Official Booking Engine Integration |
| **Icons** | Phosphor Icons |
| **Fonts** | Cormorant Garamond + Jost (Google Fonts) |
| **Deployment** | Vercel |

---

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/VinniDEm/Rajbari-palace-final.git
cd Rajbari-palace-final
npm install
```

### 2. Configure Environment

Copy the example env file and fill in the eZee booking engine URL:

```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_EZEE_BOOKING_URL=https://live.ipms247.com/booking/book-rooms-rajbaripalace
```

### 3. Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 4. Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## Project Structure

```
rajbari-hotel-app/
├── index.html              # Entry HTML (fonts, meta, icons CDN)
├── vite.config.js          # Vite build configuration
├── package.json            # Dependencies and scripts
├── .env.example            # Environment variable template
├── init_db.sql             # Supabase database schema + seed data
│
├── public/                 # Static assets (served as-is)
│   ├── favicon.svg         # Site favicon
│   ├── icons.svg           # SVG icon sprite
│   ├── Indoor/             # Property interior photos
│   ├── Outdoor/            # Property exterior photos
│   ├── Standard 103/       # Standard room photos (Room 103)
│   ├── Standard 106/       # Standard room photos (Room 106)
│   ├── Standard 203/       # Standard room photos (Room 203)
│   ├── Deluxe 101/         # Deluxe room photos (Room 101)
│   ├── Deluxe 102/         # Deluxe room photos (Room 102)
│   ├── Deluxe 105/         # Deluxe room photos (Room 105)
│   ├── Deluxe 201/         # Deluxe room photos (Room 201)
│   ├── Deluxe 202/         # Deluxe room photos (Room 202)
│   └── Suite 204/          # Royal Suite photos (Room 204)
│
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main application component (all sections)
    ├── supabaseClient.js   # Supabase client initialization
    └── index.css           # Complete design system + all styles
```

---

## Key Features

- **Booking Integration** — Date selection connects directly to the official booking engine for real-time inventory and pricing.
- **Image Galleries** — Click any room card to browse all photos in a modal gallery
- **Dark/Light Theme** — Toggle between dark gold and light themes (persisted in localStorage)
- **Scroll Animations** — Smooth reveal-on-scroll effects using IntersectionObserver
- **Responsive Design** — Mobile-first layout
- **SEO Ready** — Proper meta tags, semantic HTML, heading hierarchy

---

## Integration Details

The website uses an embedded portal approach to provide a seamless user experience while relying on the official booking logic:

1. **Visual Showcase (`SHOWCASE_ROOMS` in `App.jsx`)**: The high-quality room photos and descriptions are kept in the React app to provide a fast, beautiful gallery experience without waiting for API calls.
2. **Search Form**: A custom date-picker form collects Check-in, Check-out, Adults, and Children parameters.
3. **Direct Redirect**: When the user clicks "Book Now" on a room card, they are redirected to the official booking portal for that specific category. Alternatively, they can use the search widget to find real-time availability.
4. **Checkout**: The guest completes the entire booking and payment process securely, never leaving the Rajbari Palace website domain.

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `VITE_EZEE_BOOKING_URL`
4. Deploy — Vercel auto-detects Vite and builds correctly

---

## Room Categories

| Category | Base Price | Description |
|---|---|---|
| **Standard Room** | ₹1,499/night | Modern amenities, comfortable bed, ideal for solo travelers |
| **Deluxe Room** | ₹1,939/night | Plush bedding, enhanced views, perfect for couples |
| **Royal Suite** | ₹3,499/night | Premium regal interiors, expansive bathroom, exclusive services |

---

## License

Private — Rajbari Palace, Deoghar. All rights reserved.

## Contact

- **Hotel:** +91 9296969954
- **Email:** contact@rajbaripalace.com
- **Location:** Belabagan, Deoghar, Jharkhand 814112
