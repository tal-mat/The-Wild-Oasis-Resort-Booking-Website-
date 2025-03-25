import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

// Main landing page component with background image and welcome message.
export default function Page() {
  return (
    <main className="mt-24">
      <div className="fixed inset-0">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
        />
      </div>

      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl sm:text-8xl text-primary-50 mb-6 sm:mb-10 tracking-tight font-normal">
          Welcome to paradise
        </h1>

        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-4 sm:px-8 sm:py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
