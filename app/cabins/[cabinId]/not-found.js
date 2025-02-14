import Link from "next/link";

// NotFound component displays a 404 error message and a link to the cabins page
function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      {/* Display 404 error message */}
      <h1 className="text-3xl font-semibold">
        This cabin could not be found :(
      </h1>

      {/* Link to navigate back to the cabins page */}
      <Link
        href="/cabins"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Back to all cabins
      </Link>
    </main>
  );
}

export default NotFound;
