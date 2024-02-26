export async function fetchData(randNum) {
  let detailArr = [];
  const baseApi = "https://pokeapi.co/api/v2/";

  const detailApi = `${baseApi}/pokemon-species/${randNum}`;
  const res = await fetch(detailApi, { next: { revalidate: 60 * 60 * 24 } });
  const details = await res.json();

  try {
    const kopkname = details.names.map((item) => {
      if (item.language.name === "ko") return item.name;
    });
    const genera = details.genera.map((item) => {
      if (item.language.name === "ko") return item.genus;
    });
    details.flavor_text_entries.map((item, idx) => {
      if (item.language.name === "ko") {
        detailArr.push(item.flavor_text);
      }
    });

    return {
      props: {
        data: details,
        koname: kopkname,
        type: genera,
        detail: detailArr,
        color: details.color.name,
      },
    };
  } catch (err) {
    console.log(err, "에러 발생");
  }

  return null;
}
