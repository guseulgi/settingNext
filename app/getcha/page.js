export default async function Getcha() {
  const data = await fetchData();

  const enpkname = data.props.data.name.toUpperCase();
  const pknum = data.props.data.id;
  const koname = data.props.koname;
  const type = data.props.type;

  return (
    <div>
      <span className="font-bold text-slate-950">오늘의 포켓몬!</span>
      <hr />
      <p className="mt-10 font-bold text-2xl">
        {koname} ({enpkname}){" "}
        <span className="font-normal text-sm">({pknum})</span>
      </p>
      <hr />
      <p>{type}</p>
    </div>
  );
}

async function fetchData() {
  const baseApi = "https://pokeapi.co/api/v2/";
  let randNum = Math.round(parseInt(Math.random() * 1400));

  const detailApi = `${baseApi}/pokemon-species/${randNum}`;
  const res = await fetch(detailApi, { next: { revalidate: 60 * 60 * 24 } });
  const details = await res.json();

  const kopkname = details.names.map((item) => {
    if (item.language.name === "ko") return item.name;
  });
  const genera = details.genera.map((item) => {
    if (item.language.name === "ko") return item.genus;
  });

  return {
    props: {
      data: details,
      koname: kopkname,
      type: genera,
    },
  };
}
