import SidebarSection from "./_component/sidebar";

export default function MyPageLayout({ children, modal }) {
  return (
    <div className="flex gap-5">
      <SidebarSection />

      <div className="">
        {children}
        {modal}
      </div>
    </div>
  );
}
