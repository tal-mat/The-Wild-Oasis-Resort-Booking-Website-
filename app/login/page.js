import SignInButton from "@/app/_components/SignInButton";

// Metadata for the page, including the title.
export const metadata = {
  title: "Login",
};

// Page component for the sign-in screen.
export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      {/* Heading text prompting the user to sign in. */}
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      {/* Button component for Google sign-in. */}
      <SignInButton />
    </div>
  );
}
