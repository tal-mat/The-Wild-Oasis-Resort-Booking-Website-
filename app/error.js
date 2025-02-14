"use client";

import { useRouter } from "next/navigation";

// Error component displays error message and allows retry with a reset or back navigation
export default function Error({ error, reset }) {
  const router = useRouter();

  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>

      <p className="text-lg">{error.message}</p>

      {/* Retry button: calls reset if available, otherwise navigates back */}
      <button
        onClick={reset ? reset : () => router.back()}
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Try again
      </button>
    </main>
  );
}
