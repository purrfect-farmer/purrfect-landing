import { cn } from "@/lib/utils";
import WhiskersImage from "@/assets/images/whiskers.png?format=webp";
import LinkButton from "@/components/LinkButton";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";
import SectionHeading from "@/components/SectionHeading";
export default function Whiskers() {
  return (
    <section className="p-10 flex flex-col gap-10">
      <div
        className={cn(
          "max-w-3xl mx-auto",
          "flex flex-col justify-center items-center gap-4",
          "text-center"
        )}
      >
        <SectionHeading>Whiskers</SectionHeading>
        <p>
          Purrfect Whiskers is a desktop application designed to efficiently
          manage multiple instances of the chrome extension. Launch several
          instances side by side, organize them in rows or columns, and
          streamline your automation workflow.
        </p>

        <LinkButton
          icon={HiOutlineArrowDownCircle}
          href={import.meta.env.VITE_APP_WHISKERS_GITHUB_RELEASE}
        >
          Get Whiskers
        </LinkButton>
      </div>
      <div className="max-w-5xl mx-auto">
        <img
          src={WhiskersImage}
          className="ring-4 ring-orange-300 rounded-sm"
        />
      </div>
    </section>
  );
}
