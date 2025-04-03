import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label",
        {
          "lg:px-20 lg:pb-[35%]": position === "center",
        }
      )}
    >
      <div className="flex items-center rounded-full bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md ">
        <h3 className="mr-4 line-clamp-2 grow pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className="flex-none rounded-full border border-[#D53200] p-2 text-[#D53200]"
          amount={amount}
        />
      </div>
    </div>
  );
};

export default Label;
