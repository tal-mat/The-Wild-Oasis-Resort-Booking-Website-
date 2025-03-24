import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

// Helper function to format date distance from current date safely
export const formatDistanceFromNow = (dateStr) => {
  if (!dateStr) return "Unknown date";
  try {
    return formatDistance(parseISO(dateStr), new Date(), {
      addSuffix: true,
    }).replace("about ", "");
  } catch (error) {
    console.error("Invalid date in formatDistanceFromNow:", dateStr);
    return "Invalid date";
  }
};

// ReservationCard component displays reservation details
function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    createdAt,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800">
      {/* Display cabin image */}
      <div className="relative h-32 aspect-square w-full sm:w-auto">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-r border-primary-800"
        />
      </div>

      {/* Display reservation details */}
      <div className="flex-grow px-4 py-3 sm:px-6 flex flex-col">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">
            {numNights} nights in Cabin {name}
          </h3>
          {/* Show status (past or upcoming) */}
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        {/* Display reservation dates */}
        <p className="text-sm sm:text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd")}
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-auto items-baseline">
          {/* Display total price and number of guests */}
          <p className="text-base sm:text-xl font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-sm sm:text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          {/* Display booking creation date */}
          <p className="ml-0 sm:ml-auto text-xs sm:text-sm text-primary-400">
            Booked {format(new Date(createdAt), "EEE, MMM dd, p")}
          </p>
        </div>
      </div>

      {/* Action buttons for editing and deleting reservation */}
      <div className="flex flex-row sm:flex-col border-t sm:border-t-0 sm:border-l border-primary-800 w-full sm:w-[100px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
