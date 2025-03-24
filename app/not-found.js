import Link from "next/link";

// NotFound component displays a 404 error message and a link to the home page
function NotFound() {
  return (
    <main className="text-center space-y-4 mt-6 px-4">
      {/* 404 message */}
      <h1 className="text-2xl font-semibold">
        This page could not be found :(
      </h1>

      {/* Link to navigate back to the home page */}
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-4 py-2 text-base"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
