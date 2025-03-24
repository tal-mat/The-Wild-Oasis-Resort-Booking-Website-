"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "@/app/_components/ReservationContext";

// ReservationReminder component to display a reminder for reserving dates if a valid date range is provided
function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range?.from || !range?.to) return null;

  return (
    // Fixed position reminder at the bottom of the screen
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 py-3 px-4 sm:px-8 rounded-full bg-accent-500 text-primary-800 text-sm sm:text-base font-semibold shadow-xl shadow-slate-900 flex gap-4 sm:gap-8 items-center">
      <p className="text-xs sm:text-sm">
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from{" "}
        {/* Format and display the 'from' and 'to' dates */}
        {format(new Date(range.from), "MMM dd")} to{" "}
        {format(new Date(range.to), "MMM dd")}
      </p>
      <button
        className="rounded-full p-1 hover:bg-accent-600 transition-all"
        onClick={resetRange}
      >
        {/* Close button to dismiss the reminder */}
        <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
