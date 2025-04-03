// "use client";

import Gallery from "@/components/common/product/gallery";
import { ProductDescription } from "@/components/common/product/product-description";
import { headers } from 'next/headers';
import Link from "next/link"
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
    <>
    <div className="fixed top-0 right-0 h-screen w-[50vw]">
      <img
        src="/images/gradient.png"
        alt="Background gradient"
        className="fixed h-full w-full object-cover"
      />
    </div>

  
  <div className="relative z-10 bg-white min-h-screen px-6 py-8 lg:px-16">
  
    <Link href="/">
      <button variant="outline" className="mb-8">
        ← Retour
      </button>
    </Link>

 
    <div className="flex flex-col lg:flex-row items-center ">
    
      <div className="w-full lg:w-1/2">
        <Gallery images={product.images} />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <ProductDescription
            stock={2}
            title={product.name}
            amount={product.price}
            productDescription={product.product_description}
            causeDescription={product.animal_decription}
          />
        </div>
      </div>
    </div>
    </div>
   
 </>
);
}


