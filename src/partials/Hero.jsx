import AppIcon from "@/assets/images/icon-unwrapped-cropped.png?format=webp&h=480";
import ContainerGrid from "@/components/ContainerGrid";
import HeroImage from "@/assets/images/hero.png?format=webp";
import LinkButton from "@/components/LinkButton";
import { FaChrome, FaGithub } from "react-icons/fa6";

const HeroButton = LinkButton;

export default function Hero() {
  return (
    <div className="bg-orange-100 flex justify-center min-h-dvh">
      <ContainerGrid>
        <div className="flex flex-col gap-4 p-10 items-center  justify-center">
          <img src={AppIcon} className="h-28 lg:h-36" />
          <h1 className="font-turret-road text-3xl lg:text-4xl text-orange-500 text-center">
            Purrfect Farmer
          </h1>

          <p className="font-thin max-lg:max-w-96 text-center text-2xl lg:text-3xl">
            Automate Telegram Mini-Apps easily, combined with mirrored controls.
          </p>

          <div className="flex">
            <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-2">
              <HeroButton
                icon={FaChrome}
                href={import.meta.env.VITE_APP_TELEGRAM_CHANNEL}
              >
                Get Extension
              </HeroButton>
              <HeroButton
                icon={FaGithub}
                href={import.meta.env.VITE_APP_GITHUB}
              >
                Source Codes
              </HeroButton>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:absolute inset-0 flex flex-col items-center justify-center">
            <img src={HeroImage} className="rounded-xl w-[520px] max-h-full" />
          </div>
        </div>
      </ContainerGrid>
    </div>
  );
}
