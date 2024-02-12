export default function NoticeLayout({ children, modal }) {
  return (
    <div className="h-[42dvh]">
      {children}
      {modal}
    </div>
  );
}
