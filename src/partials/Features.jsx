import { cn } from "@/lib/utils";

export default function Features() {
  return (
    <div
      className={cn(
        "max-w-3xl mx-auto",
        "flex flex-col justify-center items-center gap-4 p-10",
        "text-center"
      )}
    >
      <h2 className="font-turret-road text-3xl lg:text-4xl text-orange-500">
        Features
      </h2>
      <p>
        Purrfect Farmer is an advance Telegram Mini-Apps automation tool, it's
        packed with numerous features that makes farming airdrops easy.
      </p>
    </div>
  );
}
