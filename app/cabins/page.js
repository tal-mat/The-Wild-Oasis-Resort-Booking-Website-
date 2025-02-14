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
    <div>
      {/* Display the page title */}
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>

      {/* Display a description of the cabins */}
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy natureapos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        {/* Filter component to select cabin capacity */}
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
