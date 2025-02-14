import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

// // Helper function to format date distance from current date
// // export const formatDistanceFromNow = (dateStr) =>
// //   formatDistance(parseISO(dateStr), new Date(), {
// //     addSuffix: true,
// //   }).replace("about ", "");

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
    <div className="flex border border-primary-800">
      {/* Display cabin image */}
      <div className="relative h-32 aspect-square relative">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-r border-primary-800"
        />
      </div>

      {/* Display reservation details */}
      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
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
        <p className="text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          {/* Display total price and number of guests */}
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          {/* Display booking creation date */}
          <p className="ml-auto text-sm text-primary-400">
            Booked {format(new Date(createdAt), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {/* Action buttons for editing and deleting reservation */}
      <div className="flex flex-col border-l border-primary-800 w-[100px]">
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
