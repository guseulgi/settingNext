export default function NoticeLayout({ children, modal }) {
  return (
    <div className="h-[44dvh]">
      {children}
      {modal}
    </div>
  );
}
