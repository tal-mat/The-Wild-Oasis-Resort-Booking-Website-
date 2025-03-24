import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "@/app/_components/LoginMessage";
import { auth } from "@/app/_lib/auth";

// Reservation component handles the reservation process for a cabin
async function Reservation({ cabin }) {
  // Fetches settings and booked dates for the cabin concurrently
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  // Get the current session to check user authentication
  const session = await auth();

  return (
    <div className="grid grid-cols-1 border border-primary-800 min-h-[400px]">
      {/* DateSelector component handles the date selection for the reservation */}
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />

      {/* Displays the reservation form or login message based on user authentication */}
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
