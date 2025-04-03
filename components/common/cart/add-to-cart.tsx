"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

function SubmitButton({ stock }: { stock: number }) {
  const baseClasses =
    "relative flex w-full items-center justify-center rounded-full bg-[#D53200] p-4 tracking-wide text-white transition";
  const disabledClasses = "cursor-not-allowed opacity-60";

  if (stock === 0) {
    return (
      <button disabled className={clsx(baseClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  return (
    <button className={clsx(baseClasses, "hover:opacity-90")}>
      <div className="absolute left-0 ml-4">
        <PlusIcon className="h-5" />
      </div>
      Ajouter au panier
    </button>
  );
}

export default function AddToCartPreview({ stock }: { stock: number }) {
  return (
    <div className="p-4 max-w-md mx-auto">
      <SubmitButton stock={stock} />
    </div>
  );
}
