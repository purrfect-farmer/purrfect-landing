import CheckList from "@/components/CheckList";
import ContainerGrid from "@/components/ContainerGrid";
import SidePanelImage from "@/assets/images/side-panel.png?format=webp";

export default function SidePanel() {
  return (
    <ContainerGrid className="mx-auto p-10 gap-10">
      <div className="flex flex-col gap-2 lg:col-start-2">
        <h2 className="font-turret-road text-3xl lg:text-4xl text-orange-500">
          Side Panel
        </h2>
        <p>
          Enabling the farmer inside the side-panel allows you to farm while
          doing other tasks.
        </p>

        <p>No need to switch between windows, as it works across all tabs.</p>

        <CheckList items={["Toggle Side Panel", "Configurable Window Mode"]} />
      </div>

      <div className="lg:row-start-1 lg:col-start-1">
        <img
          src={SidePanelImage}
          className="ring-4 ring-orange-300 rounded-sm w-[640px]"
        />
      </div>
    </ContainerGrid>
  );
}
