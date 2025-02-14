import Link from "next/link";
import { auth } from "../_lib/auth";

// Navigation component renders the site navigation with links
export default async function Navigation() {
  /*
    The `auth()` function makes the site dynamic by reading session cookies
    at runtime through request headers. Since the navigation is part of every
    route, it ensures dynamic rendering of all routes based on the user's auth state.
    To prevent this, remove or adjust the `auth()` call here.
  */
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {/* Navigation link to cabins page */}
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        {/* Navigation link to about page */}
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        {/* Navigation link to guest area */}
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
