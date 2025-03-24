import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center space-y-4 mt-6 px-4">
      <h1 className="text-2xl font-semibold">
        Thank you for your reservation!
      </h1>
      <Link
        href="/account/reservations"
        className="underline text-lg text-accent-500 inline-block"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}
