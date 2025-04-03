import clsx from "clsx";
import Image from "next/image";
import Label from "../label";

export function GridTileImage({
  isInteractive = true,
  label,
  stock,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  stock?: number;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & Omit<React.ComponentProps<typeof Image>, "width" | "height">) {
  return (
    <div
      className={clsx(
        "relative group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-transparent hover:border-[#D53200] bg-card text-card-foreground"
      )}
    >
      {props.src && (
        <Image
          className={clsx("object-cover", {
            "transition duration-300 ease-in-out group-hover:scale-105":
              isInteractive,
            "opacity-50": stock === 0,
          })}
          sizes="100%"
          {...props}
        />
      )}

      {stock !== undefined && stock > 0 && (
        <div className="absolute right-2 top-2 rounded-full bg-[#D53200] px-3 py-1 text-xs font-semibold text-white">
          ONLY {stock} LEFT
        </div>
      )}

      {stock == 0 && (
        <div className="absolute right-2 top-2 rounded-full bg-[#D53200] px-3 py-1 text-xs font-semibold text-white">
          OUT OF STOCK
        </div>
      )}
      {label && (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      )}
    </div>
  );
}
