import { Badge } from "flowbite-react";

export default async function Getcha() {
  const data = await fetchData();

  const enpkname = data.props.data.name.toUpperCase();
  const pknum = data.props.data.id;
  const koname = data.props.koname;
  const type = data.props.type;
  const detail = data.props.detail;

  return (
    <div>
      <span className="font-bold text-slate-950">오늘의 포켓몬!</span>

      <p className="mt-5 font-bold text-2xl">
        {koname}({enpkname})
      </p>

      <div className="my-2 mx-2 flex gap-2">
        {pknum && (
          <div className="inline-block">
            <Badge color="warning" size="sm">
              {pknum}
            </Badge>
          </div>
        )}
        {type && (
          <div className="inline-block">
            <Badge color="indigo" size="sm">
              {type}
            </Badge>
          </div>
        )}
      </div>
      <p className="my-5">{detail}</p>

      <hr />
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
  const detail = details.flavor_text_entries.map((item) => {
    if (item.language.name === "ko") return item.flavor_text + `\n`;
  });

  console.log("details", details);

  return {
    props: {
      data: details,
      koname: kopkname,
      type: genera,
      detail: detail,
    },
  };
}
