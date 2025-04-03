// "use client";

import Gallery from "@/components/common/product/gallery";
import { ProductDescription } from "@/components/common/product/product-description";
import { headers } from 'next/headers';

export default async function Product({params}: { params: Promise<{ product_id: string }> }) {

  const { product_id } = await params;
  if (!product_id) {
    return <div>Product not found</div>;
  }

  // Récupérer l'hôte depuis les headers de la requête
  const headersList = await headers();
  const host = headersList.get('host'); 
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const response = await fetch(`${protocol}://${host}/api/products/${product_id}`)
  const product = await response.json();
  if (!product) {
    return <div>Product not found</div>;
  }
  if (product.error) {
    return <div>{product.error}</div>;
  }

  return (
    <div className="flex gap-6">
      <div className="w-[70%]">
        <Gallery images={product.images} />
      </div>
      <div className="w-[30%] shrink-0">
        <ProductDescription
          stock={2}
          title={product.name}
          amount={product.price}
          productDescription={product.product_description}
          causeDescription={product.animal_decription}
        />
      </div>
    </div>
  );
}
