# Rajbari Palace — Luxury Boutique Hotel Booking Engine

A modern, responsive hotel booking website built for **Rajbari Palace**, a luxury boutique hotel in Deoghar, Jharkhand. Features a real-time room selection cart, dynamic image galleries, dark/light theme toggle, and a checkout flow ready for OTA/payment gateway integration.

**Live Demo:** _[Vercel deployment URL will go here]_

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19 + Vite 8 |
| **Styling** | Vanilla CSS with CSS Custom Properties (dark/light theming) |
| **Backend** | Supabase (PostgreSQL — room data + bookings) |
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

Copy the example env file and fill in your Supabase credentials:

```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

> **Note:** The app works without Supabase credentials — it falls back to built-in mock room data so you can preview the UI immediately.

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

- **Room Selection Cart** — Add/remove rooms with quantity controls, live price calculation
- **Image Galleries** — Click any room card to browse all photos in a modal gallery
- **Dark/Light Theme** — Toggle between dark gold and light themes (persisted in localStorage)
- **Scroll Animations** — Smooth reveal-on-scroll effects using IntersectionObserver
- **Responsive Design** — Mobile-first layout with sticky checkout sidebar on desktop
- **Legal Modals** — Terms & Conditions and Privacy Policy modals in the checkout flow
- **SEO Ready** — Proper meta tags, semantic HTML, heading hierarchy

---

## Integration Points for eZee / OTA

### 🔌 Where to Hook In

#### 1. Room Data — `src/supabaseClient.js` + `src/App.jsx` (line ~100)
Currently fetches room categories from Supabase. Replace with eZee API calls to pull live room inventory, pricing, and availability.

```jsx
// src/App.jsx — Replace the Supabase fetch with eZee API
useEffect(() => {
  // TODO: eZee Integration — fetch rooms from eZee API
  // Example: fetch('https://api.ezee.com/rooms?hotel_id=XXX')
  const fetchRooms = async () => { ... }
  fetchRooms()
}, [])
```

#### 2. Checkout / Payment — `src/App.jsx` (line ~143)
The `handleCheckout` function builds a booking payload and currently shows a placeholder alert. This is where the eZee booking API and payment gateway should be connected.

```jsx
// src/App.jsx — handleCheckout function
const bookingPayload = {
  ...formData,         // { name, phone, checkIn, guests }
  totalAmount: calculateTotal(),
  items: cart          // { 'standard': 1, 'deluxe': 2 }
}
// TODO: POST to eZee booking API + redirect to payment gateway
```

#### 3. Database Schema — `init_db.sql`
Contains the Supabase table definitions for `room_categories` and `bookings`. Use this as reference for the data model if migrating to a different backend.

---

## Supabase Setup (Optional)

If using the Supabase backend:

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the entire `init_db.sql` script
3. Upload room images to Supabase Storage (or keep them in `public/` for static hosting)
4. Copy your project URL and anon key to `.env`

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
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
