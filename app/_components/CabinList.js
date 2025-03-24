import { unstable_noStore as noStore } from "next/cache";

import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";

// Component for displaying a list of cabin cards in a responsive grid layout
// Fetches cabin data asynchronously; returns null if no data is available
async function CabinList({ filter }) {
  // Prevents caching to ensure fresh cabin data is fetched on each request for real-time updates.
  noStore();

  const cabins = await getCabins();

  if (!cabins.length) return null;

  // Filter cabins based on the selected capacity filter
  let displayedCabins;
  switch (filter) {
    case "all":
      displayedCabins = cabins;
      break;
    case "small":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
      break;
    case "medium":
      displayedCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
      );
      break;
    case "large":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
      break;
    default:
      displayedCabins = cabins;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
      {/* Map through cabins array and render a CabinCard for each cabin */}
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
