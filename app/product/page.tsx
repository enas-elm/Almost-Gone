"use client";

import Gallery from "@/components/common/product/gallery";
import { ProductDescription } from "@/components/common/product/product-description";

export default function Product() {
  const fakeImages = [
    { src: "/assets/products/tiger.png", altText: "Image 1" },
    { src: "/assets/products/animal.png", altText: "Image 2" },
  ];

  return (
    <div className="flex gap-6">
      <div className="w-[70%]">
        <Gallery images={fakeImages} />
      </div>
      <div className="w-[30%] shrink-0">
        <ProductDescription
          stock={2}
          title="Tigre du Bengale"
          amount="30.00"
          productDescription="Un t-shirt en coton bio sérigraphié à la main, édition limitée."
          causeDescription="Chaque achat contribue à la sauvegarde du tigre du Bengale, une espèce en voie de disparition."
        />
      </div>
    </div>
  );
}
