"use client";

export default function ArrowButton({ children, type }) {
  const prevPokemon = () => {};

  const nextPokemon = () => {};
  if (type === "prev") {
    return <button onClick={prevPokemon}>{children}</button>;
  } else if (type === "next") {
    return <button onClick={nextPokemon}>{children}</button>;
  }
}
