"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "@/app/_components/ReservationContext";

// Checks if any date in datesArr falls within the specified date range
function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

// DateSelector component for selecting a range of dates and showing pricing details
function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // Booking length constraints in nights
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        // Date picker configuration with range mode and date constraints
        className="pt-6 sm:pt-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={1}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 bg-accent-500 text-primary-800 h-auto sm:h-[72px] py-4 sm:py-0">
        <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-6 mb-4 sm:mb-0">
          <p className="flex gap-1 sm:gap-2 items-baseline text-sm sm:text-base">
            {/* Displays the price per night with or without discount */}
            {discount > 0 ? (
              <>
                <span className="text-xl sm:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl sm:text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {/* Displays total nights selected and final price */}
          {numNights ? (
            <>
              <p className="bg-accent-600 px-2 py-1 sm:px-3 sm:py-2 text-lg sm:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-bold uppercase">Total</span>{" "}
                <span className="font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {/* Button to clear the selected date range */}
        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
