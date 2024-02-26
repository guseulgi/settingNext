export default function GetChaLayout({ children }) {
  return (
    <div className="font-pixel">
      <span className="font-bold text-slate-950">오늘의 포켓몬!</span>

      {children}
    </div>
  );
}
