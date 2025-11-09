import { cn } from "@/lib/utils";

export default function SectionHeading({ ...props }) {
  return (
    <h2
      {...props}
      className={cn(
        "font-turret-road text-3xl lg:text-4xl text-orange-500",
        props.className
      )}
    />
  );
}
