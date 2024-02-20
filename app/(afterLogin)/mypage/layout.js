import SidebarSection from "./_component/sidebar";

export default function MyPageLayout({ children, modal }) {
  return (
    <div className="md:flex block gap-1 md:gap-5 font-pixel ">
      <SidebarSection />

      <>
        {children}
        {modal}
      </>
    </div>
  );
}
