export default async function Getcha() {
  const data = await fetchData();
  // console.log("data", data);
  // console.log("data", data.props.data.results);

  const pkname = data.props.data.results[0].name.toUpperCase();
  const pknum = data.props.data.results[0].url.split("/")[6];

  return (
    <div>
      <span className="font-bold text-slate-950">오늘의 포켓몬!</span>
      <hr />
      <p className="mt-10 font-bold text-2xl">
        {pkname} ({pknum}/{data.props.data.count})
      </p>
    </div>
  );
}

async function fetchData() {
  const baseApi = "https://pokeapi.co/api/v2/pokemon";
  let randNum = Math.round(parseInt(Math.random() * 1400));
  const offsetApi = `${baseApi}?offset=${randNum}&limit=1`;

  // ISR
  const res = await fetch(offsetApi, { next: { revalidate: 60 * 60 * 24 } });

  // SSR
  // const res = await fetch(offsetApi, { cache: "no-store" });
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
