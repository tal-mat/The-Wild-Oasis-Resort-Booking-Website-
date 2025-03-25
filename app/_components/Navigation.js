import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();
  const userImage = session?.user?.image;

  return (
    <nav className="z-10">
      <ul className="flex items-center gap-4 sm:gap-8 md:gap-16">
        <li className="text-base sm:text-lg md:text-xl">
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li className="text-base sm:text-lg md:text-xl">
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li className="text-base sm:text-lg md:text-xl">
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-2 md:gap-4 whitespace-nowrap"
          >
            {userImage ? (
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={userImage}
                    alt={session.user.name || "User profile"}
                    width={32}
                    height={32}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span>Guest area</span>
              </div>
            ) : (
              <span>Guest area</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
