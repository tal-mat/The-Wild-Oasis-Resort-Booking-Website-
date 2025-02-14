import { getCabin, getCabins } from "@/app/_lib/data-service";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

// Generate metadata for cabin page based on the cabin's name
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

// Generate static parameters for cabin pages so the route will be static and not dynamic
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return ids;
}

// Page component rendering cabin details and reservation options
export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      {/* Render the cabin details */}
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        {/* Suspense for lazy loading the Reservation component */}
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
