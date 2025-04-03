// "use client";

import Gallery from "@/components/common/product/gallery";
import { ProductDescription } from "@/components/common/product/product-description";
import { headers } from 'next/headers';
import Link from "next/link"
export default async function Product({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const { product_id } = await params;
  if (!product_id) {
    return <div>Product not found</div>;
  }

  // Récupérer l'hôte depuis les headers de la requête
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocol}://${host}/api/products/${product_id}`
  );
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

      <header className="relative z-10 flex justify-between items-center p-12">
        <Link href="/" className="font-bold text-2xl">
          ALMOST GONE
        </Link>
        <nav className="flex gap-8 text-sm items-center">
          <Link
            className="h-fit text-base relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            href="/"
          >
            SHOP
          </Link>
          <Link
            className="h-fit text-base relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            href="/"
          >
            LEARN MORE
          </Link>
          <Link
            className="h-fit text-base relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            href="https://www.worldwildlife.org/pages/ways-to-support-wwf"
            target="_blank"
            rel="noopener noreferrer"
          >
            DONATE
          </Link>
          <div className="flex gap-4">
            <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center cursor-not-allowed">
              <img
                src="/images/icon-cart.svg"
                alt="Eye icon"
                className="w-6 h-6"
              />
            </div>
            <Link
              href="/auth/register"
              className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-60 transition-opacity"
            >
              <img
                src="/images/icon-user.svg"
                alt="Eye icon"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </nav>
      </header>

      <div className="bg-white min-h-screen">
        <div className="relative z-10 px-6 py-8 lg:px-16">
          <Link href="/">
            <button className="mb-8 cursor-pointer">← Back</button>
          </Link>

          <div className="flex flex-col lg:flex-row items-center ">
            <div className="w-full lg:w-1/2">
              <Gallery images={product.images} />
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-md">
                <ProductDescription
                  stock={product.stock}
                  title={product.name}
                  amount={product.price}
                  productDescription={product.product_description}
                  causeDescription={product.animal_decription}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
