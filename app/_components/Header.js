import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

// Header component renders the navigation and logo in a header section
function Header() {
  return (
    <header className="border-b border-primary-900 px-4 py-3 sm:px-8 sm:py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="order-1 md:order-1 w-full md:w-auto flex justify-center md:justify-start mb-2 md:mb-0">
            <Logo />
          </div>

          <div className="order-2 md:order-2 w-full md:w-auto flex justify-center md:justify-end">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
