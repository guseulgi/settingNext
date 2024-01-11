export default function Getcha() {
  const baseApi = "https://pokeapi.co/api/v2/pokemon";
  const randNum = Math.round(parseInt(Math.random() * 1400));
  console.log(randNum);
  const offsetApi = `${baseApi}?offset=${randNum}&limit=1`;

  async function fetchData() {
    const res = await fetch(offsetApi);
    const data = await res.json();
    return data;
  }
  fetchData();

  return (
    <div>
      <span className="font-bold text-slate-950">오늘의 포켓몬!</span>
      <hr />
      {/* {result && <p>{result.results.name}</p>} */}
    </div>
  );
}
