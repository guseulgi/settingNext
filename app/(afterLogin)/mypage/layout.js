import SidebarSection from "./_component/sidebar";

export default function MyPageLayout({ children }) {
  return (
    <div className="flex gap-5">
      <SidebarSection />

      <div className="">{children}</div>
    </div>
  );
}
