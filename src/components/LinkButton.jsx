import { cn } from "@/lib/utils";

const LinkButton = ({
  icon: Icon, // eslint-disable-line
  children,
  ...props
}) => (
  <a
    {...props}
    target="_blank"
    className={cn(
      "bg-orange-200",
      "p-2 px-4 rounded-full",
      "inline-flex items-center justify-center gap-2",
      props.className
    )}
  >
    <Icon className="text-orange-500 w-5 h-5" />{" "}
    <div className="text-orange-800 font-bold">{children}</div>
  </a>
);

export default LinkButton;
