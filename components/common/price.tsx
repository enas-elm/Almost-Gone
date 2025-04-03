import clsx from "clsx";

const Price = ({
  amount = "29.99",
  className,
}: {
  amount?: number | string;
  className?: string;
}) => (
  <p className={clsx("text-base font-semibold", className)}>{`${amount}€`}</p>
);

export default Price;
