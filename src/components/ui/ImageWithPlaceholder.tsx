"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "onLoad"> & {
  containerClass?: string;
};

export function ImageWithPlaceholder({
  containerClass = "",
  alt,
  ...imgProps
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-surface-elevated ${containerClass}`}
    >
      {/* Placeholder overlay — fades out when image loads */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Real image — always visible, scales on load */}
      <Image
        alt={alt}
        {...imgProps}
        className={`transition-all duration-700 ${
          loaded ? "scale-100" : "scale-105"
        } ${imgProps.className || ""}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
