"use client";

import { useRouter } from "next/navigation";

export default function ArrowButton({ children, type, curNum }) {
  const router = useRouter();

  const prevPokemon = () => {
    router.replace(`/getcha/${parseInt(curNum) - 1}`);
  };

  const nextPokemon = () => {
    router.replace(`/getcha/${parseInt(curNum) + 1}`);
  };

  if (type === "prev") {
    return <button onClick={prevPokemon}>{children}</button>;
  } else if (type === "next") {
    return <button onClick={nextPokemon}>{children}</button>;
  }
}
