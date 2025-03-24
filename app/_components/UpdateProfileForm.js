"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { updateGuest } from "@/app/_lib/actions";

// UpdateProfileForm component to handle profile update form
function UpdateProfileForm({ guest, children }) {
  const [count, setCount] = useState();

  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-6 px-6 sm:py-8 sm:px-12 text-base sm:text-lg flex gap-4 sm:gap-6 flex-col"
    >
      {/* Full name input field */}
      <div className="space-y-1 sm:space-y-2">
        <label className="text-sm sm:text-base">Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 text-sm sm:text-base"
        />
      </div>

      {/* Email address input field */}
      <div className="space-y-1 sm:space-y-2">
        <label className="text-sm sm:text-base">Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 text-sm sm:text-base"
        />
      </div>

      {/* Nationality selection with flag */}
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center justify-between relative">
          <label htmlFor="nationality" className="text-sm sm:text-base">
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-4 sm:h-5 rounded-sm"
          />
        </div>

        {/* Render children components here */}
        {children}
      </div>

      {/* National ID number input field */}
      <div className="space-y-1 sm:space-y-2">
        <label htmlFor="nationalID" className="text-sm sm:text-base">
          National ID number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm sm:text-base"
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-center sm:justify-end items-center gap-4 sm:gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}

export default UpdateProfileForm;
