import clsx from "clsx";

export interface Props {
  className?: string;
}

const Biography = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
    
        "flex justify-center",
        'max-w-lg',
        "border border-white-600",
        'rounded-lg',
        "p-3",
        "m-auto",
        'mt-2'

      )}
    >
      <span>
      Hi... I am Thiviya Vanniyasingam. I live in kilinochchi. I am studying at Uki Coding School in Kilinochchi. I completed my schooling.My ambition is teaching in IT.
      </span>
    </div>
  );
};

export default Biography;
