import NavBar from "./_components/NavBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-full ">
      <NavBar />
      {children}
    </div>
  );
}
