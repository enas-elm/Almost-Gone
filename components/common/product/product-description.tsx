import AddToCart from "@/components/common/cart/add-to-cart";
import Price from "../price";
import Prose from "../prose";

export function ProductDescription({
  title,
  amount,
  productDescription,
  causeDescription,
  stock,
}: {
  title: string;
  amount: string;
  productDescription: string;
  causeDescription: string;
  stock: number;
}) {
  return (
    <div>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{title}</h1>
        <div className="flex gap-2">
          <div className="w-auto rounded-full bg-[#D53200] p-2 text-sm text-white">
            <Price amount={amount} />
          </div>
          <div className="font-bold w-auto rounded-full bg-[#D53200] p-2 text-sm text-white">
            <p>{stock} left</p>
          </div>
        </div>
      </div>

      <Prose
        className="mb-6 text-sm leading-tight dark:text-white/[60%]"
        html={productDescription}
      />

      <Prose
        className="mb-6 text-sm leading-tight dark:text-white/[60%]"
        html={causeDescription}
      />

      <AddToCart stock={stock} />
    </div>
  );
}
