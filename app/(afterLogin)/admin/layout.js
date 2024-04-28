import { fetchSession } from "@/app/_util/session";
import SidebarSection from "./_component/sidebar";

export default async function AdminLayout({ children }) {
  const session = await fetchSession();

  return (
    <div className="flex gap-4">
      <SidebarSection session={session} />
      {children}
    </div>
  );
}
