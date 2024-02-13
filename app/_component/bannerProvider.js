"use client";

import usePopbanner from "../_store/storage";

export default function BannerProvider({ children }) {
  const { selectedButton } = usePopbanner();

  return <>{selectedButton && children}</>;
}
