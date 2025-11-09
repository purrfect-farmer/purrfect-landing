import CheckList from "@/components/CheckList";
import ContainerGrid from "@/components/ContainerGrid";
import LinkButton from "@/components/LinkButton";
import MirrorImage from "@/assets/images/mirror.png?format=webp";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";
import SectionHeading from "@/components/SectionHeading";

export default function Mirror() {
  return (
    <ContainerGrid className="mx-auto p-10 gap-10">
      <div className="flex flex-col gap-2">
        <SectionHeading>Mirror</SectionHeading>
        <p>
          Sync commands across multiple accounts, events are dispatched
          seamlessly.
        </p>

        <p>
          Purrfect Mirror Server needs to be installed to use Mirror. This is a
          separate application for Linux / MacOS / Windows.
        </p>

        <p>
          Mirror allows you to e.g synchronize settings, start or stop farming
          and more among multiple accounts.
        </p>

        <CheckList
          items={[
            "Toggle Mirroring",
            "Configurable Server",
            "Farmers Per Window",
            "Individual Farmer Position",
          ]}
        />

        <div>
          <LinkButton
            icon={HiOutlineArrowDownCircle}
            href={import.meta.env.VITE_APP_MIRROR_GITHUB_RELEASE}
          >
            Get Mirror Server
          </LinkButton>
        </div>
      </div>

      <div>
        <img
          src={MirrorImage}
          className="ring-4 ring-orange-300 rounded-sm w-[640px]"
        />
      </div>
    </ContainerGrid>
  );
}
