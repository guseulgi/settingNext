import { fetchSession } from "@/app/_util/session";
import SidebarSection from "./_component/sidebar";

export default async function MyPageLayout({ children, modal }) {
  const session = await fetchSession();

  return (
    <div className="md:flex block gap-1 md:gap-5 font-pixel ">
      <SidebarSection session={session} />

      {children}
      {modal}
    </div>
  );
}
