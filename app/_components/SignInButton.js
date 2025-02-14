import Image from "next/image";
import { signInAction } from "@/app/_lib/actions";

// SignInButton component for Google authentication
function SignInButton() {
  return (
    // Form that triggers the Google sign-in server action on submit.
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium relative">
        {/* Google logo image for the sign-in button */}
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        {/* Button text to indicate the sign-in action */}
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
