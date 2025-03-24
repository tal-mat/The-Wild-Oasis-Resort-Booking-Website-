import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

// Cabin component displaying an image and detailed information about a cabin
function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 border border-primary-800 py-3 px-5 md:px-10 mb-12 md:mb-24 items-start">
      {/* Image container for the cabin with responsive dimensions */}
      <div className="relative w-full aspect-video md:h-full">
        <Image
          src={image}
          fill
          className="object-cover rounded-lg"
          alt={`Cabin ${name}`}
          priority
        />
      </div>

      {/* Text content container displaying cabin details */}
      <div>
        {/* Cabin name with large, bold styling */}
        <h3 className="text-accent-100 font-black text-3xl md:text-7xl mb-3 md:mb-5 bg-primary-950 p-4 md:p-6 pb-1 text-center md:text-left">
          Cabin {name}
        </h3>

        {/* Cabin description text */}
        <p className="text-base md:text-lg text-primary-300 mb-6 md:mb-10">
          <TextExpander>{description}</TextExpander>
          description
        </p>

        {/* List of cabin features */}
        <ul className="flex flex-col gap-3 md:gap-4 mb-5 md:mb-7">
          <li className="flex gap-2 md:gap-3 items-center">
            <UsersIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />{" "}
            {/* Icon for max capacity */}
            <span className="text-sm md:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests{" "}
              {/* Maximum guest capacity */}
            </span>
          </li>
          <li className="flex gap-2 md:gap-3 items-center">
            <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />{" "}
            {/* Icon for location */}
            <span className="text-sm md:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy){" "}
              {/* Cabin location */}
            </span>
          </li>
          <li className="flex gap-2 md:gap-3 items-center">
            <EyeSlashIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />{" "}
            {/* Icon for privacy */}
            <span className="text-sm md:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed{" "}
              {/* Privacy level */}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
