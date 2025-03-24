import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
  title: "Login",
};

// Page component for the sign-in screen.
export default function Page() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10 mt-8 sm:mt-10 items-center p-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Sign in to access your guest area
      </h2>

      <SignInButton />
    </div>
  );
}
