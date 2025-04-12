import CheckList from "@/components/CheckList";
import CloudImageIcon from "@/assets/images/cloud.png?format=webp";
import ContainerGrid from "@/components/ContainerGrid";

export default function Cloud() {
  return (
    <ContainerGrid className="mx-auto p-10 gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-turret-road text-3xl lg:text-4xl text-orange-500">
          Cloud
        </h2>
        <p>
          Automated Cloud Farming for Mini-Apps, sync once and let the Cloud
          handle the rest.
        </p>

        <p>
          Purrfect Cloud requires a monthly subscription when using the Official
          Servers.
        </p>

        <CheckList
          items={[
            "Periodic Tasks",
            "Instant Notifications",
            "Accumulate more points",
            "Proxies",
            "24/7 Uptime",
          ]}
        />
      </div>

      <div>
        <img src={CloudImageIcon} className="w-[640px]" />
      </div>
    </ContainerGrid>
  );
}
