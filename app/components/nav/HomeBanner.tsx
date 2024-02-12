import Image from "next/image";
import React from "react";

export default function HomeBanner() {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2  md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Oferta
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Por inauguracion en productos seleccionados
          </p>
          <p className="text-2xl md:text-5xl text-yellow-500 font-bold">
            GET 30% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg"
            fill
            alt="image.jpg"
            className="object-contain"
          ></Image>
        </div>
      </div>
    </div>
  );
}
