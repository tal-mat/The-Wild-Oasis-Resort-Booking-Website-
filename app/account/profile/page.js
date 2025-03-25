import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

// Metadata for the Update Profile page
export const metadata = {
  title: "Update profile",
};

// Main Update Profile page component
export default async function Page() {
  const session = await auth();

  // Log session data to ensure it's fetched correctly
  console.log("Session Data:", session);

  const guest = await getGuest(session.user.email);

  // Log guest data to make sure we received the correct info
  console.log("Guest Data:", guest);

  return (
    <div>
      {/* Title of the page */}
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      {/* Description text */}
      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      {/* UpdateProfileForm component that includes SelectCountry */}
      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
