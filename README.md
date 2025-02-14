# The Wild Oasis 🌴

This project was made in the React Course by Jonas Schmedtmann.

The Wild Oasis is a beautifully designed, interactive resort website built with **Next.js** and **React**. It allows users to explore accommodations, check availability, and make bookings while providing a smooth, seamless experience. The project integrates server-side actions for booking functionality and dynamic content.

## Project Description

The Wild Oasis is a resort website that showcases the stunning accommodations, amenities, and services of a fictional luxury resort. The site includes dynamic components, such as booking forms, interactive carousels, and real-time data rendering. Built with **Next.js** for server-side rendering, it provides both client-side and server-side rendering to deliver optimal performance and user experience.

Key features include an easy-to-use booking system, smooth navigation between pages, and user authentication for managing reservations. The backend is powered by **Next.js API routes**, which handle bookings and interactions with a database.

## Features

### Frontend
- **Dynamic Booking System:** Users can select dates, number of guests, and make reservations directly from the site
- **Interactive Components:** Image carousels, modal dialogs, and hover effects for a modern user interface
- **Booking Confirmation:** Displays a booking confirmation message after successful reservation

### User Interaction
- **Booking Form:** A dynamic form for users to choose their travel dates, room preferences, and additional requests
- **Secure User Authentication:**  Provides user login and session management using Google authentication, ensuring a personalized booking experience
- **User Dashboard:** Users can view, update, or cancel their bookings

### Backend
- **API Routes in Next.js:** API routes to handle backend functionality like bookings and notifications
- **Supabase:** Used for secure user authentication and storing user and booking data
- **Next-auth:** Manages authentication flow and session handling

## Technologies Used

### Frontend:
- **Next.js:** A React framework for server-side rendering and static site generation
- **React:** JavaScript library for building interactive user interfaces
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development
- **React Day Picker:** Used for interactive date selection for booking
- **Heroicons:** Provides customizable SVG icons for the UI

### Backend:
- **Supabase:** Acts as the backend for real-time data, authentication, and database management
- **Next-auth:** Handles user authentication and session management securely

### Utilities:
- **Date-fns:** A library used for date manipulation, such as calculating the number of nights for a booking
- **PostCSS:** Used for processing CSS with additional features like Tailwind CSS support
- **ESLint:** A linting tool for maintaining code quality

## Installation

### Prerequisites
- Ensure Node.js and npm are installed
- Set up a **Supabase** account and configure authentication and database services

### Steps

1. Clone the repository:
```bash
git clone https://github.com/tal-mat/the-wild-oasis.git
cd the-wild-oasis
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   Set up environment variables:
   Create a .env.local file in the root directory and add your credentials:
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL={your-supabase-url}
NEXT_PUBLIC_SUPABASE_ANON_KEY={your-supabase-anon-key}

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET={your-nextauth-secret}

# Google OAuth Configuration
AUTH_GOOGLE_ID={your-google-client-id}
AUTH_GOOGLE_SECRET={your-google-client-secret}
```

4. Run the development server:
```bash
npm run dev
```

5. Visit the site at http://localhost:3000 to start interacting with the app.
