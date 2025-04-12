import { cn } from "@/lib/utils";

export default function ContainerGrid(props) {
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 max-w-5xl",
        props.className
      )}
    />
  );
}
