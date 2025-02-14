import Header from "@/app/_components/Header";

// Importing and applying the Josefin Sans font from Google Fonts
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// Import global CSS styles
import "@/app/_styles/globals.css";
import { ReservationProvider } from "@/app/_components/ReservationContext";

// Metadata for the root layout page (title and description)
export const metadata = {
  title: {
    template: "%s | The Wild Oasis", // Title template with dynamic page title
    default: "Welcome | The Wild Oasis", // Default title
  },
  description:
    "A luxurious cabin hotel located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dense forests.",
};

// Root layout component that wraps the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        {/* Header component */}
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          {/* Wraps children with the ReservationProvider for managing reservations */}
          <ReservationProvider>
            {/* Main content area */}
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </ReservationProvider>
        </div>
      </body>
    </html>
  );
}
