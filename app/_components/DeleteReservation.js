"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";

// DeleteReservation component renders a button for deleting a reservation by bookingId
function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure want to delete this reservation?")) {
      onDelete(bookingId);
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {/* Trash icon with hover effect */}
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      {/* Button text with slight vertical offset */}
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
