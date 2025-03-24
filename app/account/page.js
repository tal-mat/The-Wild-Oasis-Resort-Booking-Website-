import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Guest area",
};

// Guest area page that welcomes the authenticated user by their first name.
export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ").at(0) || "Guest";

  return (
    <h2 className="font-semibold text-lg sm:text-xl text-accent-400 mb-4 sm:mb-6 p-4">
      Welcome, {firstName}
    </h2>
  );
}
