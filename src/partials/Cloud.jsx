import CheckList from "@/components/CheckList";
import CloudImage from "@/assets/images/cloud.png?format=webp";
import ContainerGrid from "@/components/ContainerGrid";
import SectionHeading from "@/components/SectionHeading";

export default function Cloud() {
  return (
    <ContainerGrid className="mx-auto p-10 gap-10">
      <div className="flex flex-col gap-2">
        <SectionHeading>Cloud</SectionHeading>

        <p>
          Automated Cloud Farming for Mini-Apps, sync once and let the Cloud
          handle the rest.
        </p>

        <p>
          Purrfect Cloud requires a monthly subscription when using the Official
          Servers.
        </p>

        <p>
          Every Cloud User gets full access to all available Cloud Farmers,
          dedicated Proxy IP and Cloud Sessions to persist farming.
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
        <img src={CloudImage} className="w-[640px]" />
      </div>
    </ContainerGrid>
  );
}
