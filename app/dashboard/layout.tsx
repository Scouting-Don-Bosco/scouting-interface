import DashboardNav from "@/components/nav/dasboard.nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="dashboard">
      <DashboardNav />
      {children}
    </div>
  );
}
