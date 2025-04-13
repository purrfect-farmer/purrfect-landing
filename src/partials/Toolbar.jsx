import CheckList from "@/components/CheckList";
import ContainerGrid from "@/components/ContainerGrid";
import ToolbarImage from "@/assets/images/toolbar.png?format=webp";

export default function Toolbar() {
  return (
    <ContainerGrid className="mx-auto p-10 gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-turret-road text-3xl lg:text-4xl text-orange-500">
          Toolbar
        </h2>
        <p>Auto-Clicker, fullscreen and more tools within the toolbar.</p>

        <p>
          The toolbar complements the farmer, it can be used for airdrops
          without dedicated a farmer.
        </p>

        <CheckList
          items={[
            "Auto Clicker",
            "Fullscreen",
            "Open in Separate Tab",
            "Copy URL",
            "Toggle Toolbar",
          ]}
        />
      </div>

      <div>
        <img
          src={ToolbarImage}
          className="ring-4 ring-orange-300 rounded-sm w-[640px]"
        />
      </div>
    </ContainerGrid>
  );
}
