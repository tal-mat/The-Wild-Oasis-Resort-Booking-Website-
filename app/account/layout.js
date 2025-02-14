import SideNavigation from "@/app/_components/SideNavigation";

// Layout component with side navigation and main content area
export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      {/* Side navigation component */}
      <SideNavigation />

      {/* Main content area where children components are rendered */}
      <div className="py-1">{children}</div>
    </div>
  );
}
