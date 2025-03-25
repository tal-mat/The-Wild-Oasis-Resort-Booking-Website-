"use client";

import { useReservation } from "@/app/_components/ReservationContext";
import { differenceInDays } from "date-fns";
import { createBooking } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";
import Image from "next/image";

// A reservation form, showing the user profile and booking details while allowing them to submit a booking request.
function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();

  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      {/* Header showing logged in status */}
      <div className="bg-primary-800 text-primary-300 px-6 py-2 flex justify-between items-center">
        <p className="text-sm sm:text-base">Logged in as</p>

        {/* Display user profile image and name */}
        <div className="flex gap-2 sm:gap-4 items-center">
          <Image
            src={user.image}
            alt={user.name}
            width={32}
            height={32}
            className="rounded-full"
            referrerPolicy="no-referrer"
          />
          <p className="text-sm sm:text-base">{user.name}</p>
        </div>
      </div>

      {/* Reservation form */}
      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-6 px-6 sm:py-10 sm:px-16 text-sm sm:text-lg flex gap-3 sm:gap-5 flex-col"
      >
        {/* Number of guests selection */}
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="numGuests" className="text-xs sm:text-base">
            How many guests?
          </label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-xs sm:text-base"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {/* Generate guest options from 1 to maxCapacity */}
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Observations textarea */}
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="observations" className="text-xs sm:text-base">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-xs sm:text-base"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        {/* Submit button and message */}
        <div className="flex justify-end items-center gap-3 sm:gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-xs sm:text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton
              pendingLabel="Reserving..."
              className="text-xs sm:text-base"
            >
              Reserve Now
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
