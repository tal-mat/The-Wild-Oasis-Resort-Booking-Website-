"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Filter component for selecting cabin capacities
function Filter() {
  // Initialize navigation hooks and manage query parameters for filter state
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get the current active filter or default to 'all'
  const activeFilter = searchParams.get("capacity") ?? "all";

  // Updates the filter query parameter and navigates without scrolling
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {/* Button to show all cabins */}
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      {/* Button for small cabins (1-3 guests) */}
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      {/* Button for medium cabins (4-7 guests) */}
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      {/* Button for large cabins (8-12 guests) */}
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

// Button component to render a button with conditional styling based on the active filter
function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
