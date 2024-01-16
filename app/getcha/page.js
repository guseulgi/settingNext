export default async function Getcha() {
  const data = await fetchData();
  console.log("data", data);

  return (
    <div>
      <span className="font-bold text-slate-950">오늘의 포켓몬!</span>
      <hr />
      <p>{data.props.data.count}</p>
    </div>
  );
}

async function fetchData() {
  const baseApi = "https://pokeapi.co/api/v2/pokemon";
  const randNum = Math.round(parseInt(Math.random() * 1400));
  const offsetApi = `${baseApi}?offset=${randNum}&limit=1`;

  const res = await fetch(offsetApi, {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
