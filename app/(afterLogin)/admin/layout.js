import SidebarSection from "./_component/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex gap-4">
      <SidebarSection />
      {children}
    </div>
  );
}
