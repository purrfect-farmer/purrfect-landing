import CheckList from "@/components/CheckList";
import ContainerGrid from "@/components/ContainerGrid";
import LinkButton from "@/components/LinkButton";
import MirrorImageIcon from "@/assets/images/mirror.png?format=webp";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";

export default function Mirror() {
  return (
    <ContainerGrid className="mx-auto p-10 gap-10">
      <div className="flex flex-col gap-2 lg:col-start-2">
        <h2 className="font-turret-road text-3xl lg:text-4xl text-orange-500">
          Mirror
        </h2>
        <p>
          Sync commands across multiple accounts, events are dispatched
          seamlessly.
        </p>

        <p>Purrfect Mirror Server needs to be installed to use Mirror.</p>

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
            href={import.meta.env.VITE_APP_TELEGRAM_CHANNEL}
          >
            Get Mirror Server
          </LinkButton>
        </div>
      </div>

      <div className="lg:row-start-1 lg:col-start-1">
        <img
          src={MirrorImageIcon}
          className="ring-4 ring-orange-300 w-[640px]"
        />
      </div>
    </ContainerGrid>
  );
}
