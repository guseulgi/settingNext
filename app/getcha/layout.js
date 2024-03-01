import SearchBar from "../_component/searchbar";

export default function GetChaLayout({ children }) {
  return (
    <div className="font-pixel">
      <div className="flex justify-between">
        <span className="font-bold text-slate-950">오늘의 포켓몬!</span>
        <SearchBar />
      </div>

      {children}
    </div>
  );
}
