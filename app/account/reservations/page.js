import Link from "next/link";
import { getBookings } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";
import ReservationList from "@/app/_components/ReservationList";

// Metadata for the Reservations page
export const metadata = {
  title: "Reservations",
};

// Main Reservations page component
export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      {/* Title of the Reservations page */}
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {/* Conditional rendering based on bookings length */}
      {bookings.length === 0 ? (
        // Message when no bookings exist
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
