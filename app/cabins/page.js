import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";

// Disable caching. This allows fetching the latest cabin data every hour.
// Note: Kept for study, not relevant now since `searchParams` handle dynamic data fetching.
export const revalidate = 3600;

// Metadata for the page title
export const metadata = {
  title: "Cabins",
};

// Page component that displays cabins data
export default async function Page({ searchParams }) {
  // Get the filter value from searchParams, default to "all" if not provided
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="p-4">
      <div className="mb-4">
        {/* Display the page title */}
        <h1 className="text-xl sm:text-3xl text-accent-400 font-medium text-center sm:text-left">
          Our Luxury Cabins
        </h1>
      </div>
      <div className="mb-6">
        {/* Display a description of the cabins */}
        <p className="text-sm text-primary-200 leading-relaxed">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature's beauty in your own
          little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>
      </div>
      <div className="flex justify-end mb-4">
        <Filter />
      </div>
      {/* Suspense wrapper to re-mount CabinList on filter change, triggering a fresh data fetch */}
      <Suspense fallback={<Spinner />} key={filter}>
        {/* Display the list of cabins based on the selected filter */}
        {<CabinList filter={filter} />}
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
