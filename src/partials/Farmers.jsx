import CheckList from "@/components/CheckList";
import ContainerGrid from "@/components/ContainerGrid";
import FarmersImage from "@/assets/images/farmers.png?format=webp";

export default function Farmers() {
  return (
    <ContainerGrid className="mx-auto p-10 gap-10">
      <div className="flex flex-col gap-2 lg:col-start-2">
        <h2 className="font-turret-road text-3xl lg:text-4xl text-orange-500">
          Farmers
        </h2>
        <p>
          20+ Farmers included, with support for running multiple farmers at
          once.
        </p>

        <p>
          Ability to choose between session or web mode for farming, configure
          everything down to the last setting.
        </p>

        <CheckList
          items={[
            "Multiple Tabs",
            "Zoomies (Auto Farming)",
            "Enable / Disable Farmers",
            "Reorder Farmers",
            "Farmer Mode",
            "Telegram Web Version",
          ]}
        />
      </div>

      <div className="lg:row-start-1 lg:col-start-1">
        <img src={FarmersImage} className="w-[640px]" />
      </div>
    </ContainerGrid>
  );
}
