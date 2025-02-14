import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

// Logo component that links to the homepage with an image and title
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* Logo image with alt text and high quality */}
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
      />
      {/* Logo text */}
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
