import Image from "next/image";
import Link from "next/link";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import { getCabins } from "@/app/_lib/data-service";

// Disable caching to fetch the latest cabin data on each request every one 1 day
export const revalidate = 86400;

// Metadata for the About page
export const metadata = {
  title: "About",
};

// Main About page component
export default async function Page() {
  const cabins = await getCabins();
  const numCabins = cabins.length;

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      {/* Section with information about The Wild Oasis */}
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          {/* Paragraphs describing the experience at The Wild Oasis */}
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about reconnecting with nature and enjoying simple
            pleasures with family.
          </p>
          <p>
            {`Our ${numCabins && numCabins > 0 ? numCabins : ""} luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.`}
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      {/* Image of a family around a fire pit */}
      <div className="col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      {/* Image showing the family that manages The Wild Oasis */}
      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      {/* Section about the family-run management since 1962 */}
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          {/* Paragraphs describing the family history and tradition */}
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          {/* Call to action for exploring luxury cabins */}
          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
