import SideNavigation from "@/app/_components/SideNavigation";

// Layout component with side navigation and main content area
export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[16rem_1fr] h-full gap-4 sm:gap-12">
      {/* Side navigation component */}
      <SideNavigation />

      {/* Main content area where children components are rendered */}
      <div className="py-1 px-4 sm:px-0">{children}</div>
    </div>
  );
}
