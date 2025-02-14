import Link from "next/link";

// LoginMessage component prompts the user to log in for reservation access
function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Please {/* Link to the login page */}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
