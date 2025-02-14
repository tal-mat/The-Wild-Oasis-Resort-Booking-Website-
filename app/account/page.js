// Metadata for the page, including the title.
import { auth } from "@/app/_lib/auth";

// Metadata for the page, including the title.
export const metadata = {
  title: "Guest area",
};

// Guest area page that welcomes the authenticated user by their first name.
export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}
