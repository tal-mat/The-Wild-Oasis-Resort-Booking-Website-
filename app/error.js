"use client";

import { useRouter } from "next/navigation";

// Error component displays error message and allows retry with a reset or back navigation
export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <main className="flex justify-center items-center flex-col gap-4 px-4 py-8">
      <h1 className="text-2xl font-semibold text-center">
        Something went wrong!
      </h1>

      <p className="text-base text-center">{error.message}</p>

      {/* Retry button: calls reset if available, otherwise navigates back */}
      <button
        onClick={reset ? reset : () => router.back()}
        className="inline-block bg-accent-500 text-primary-800 px-4 py-2 text-base"
      >
        Try again
      </button>
    </main>
  );
}
