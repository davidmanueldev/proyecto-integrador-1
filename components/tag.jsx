import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex border border-fuchsia-400 gap-2 px-3 py-1 rounded-full uppercase items-center",
        className
      )}
      {...otherProps}
    >
      <span className="text-red-600">&#10038;</span>
      <span className="bg-gradient-to-br from-red-600 to-purple-600 text-transparent bg-clip-text text-sm">
        {children}
      </span>
    </div>
  );
}
