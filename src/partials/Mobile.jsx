import CheckList from "@/components/CheckList";
import ContainerGrid from "@/components/ContainerGrid";
import MobileImage from "@/assets/images/mobile.png?format=webp";
import SectionHeading from "@/components/SectionHeading";

export default function Mobile() {
  return (
    <ContainerGrid className="mx-auto p-10 gap-10">
      <div className="flex flex-col justify-center gap-2 lg:col-start-2">
        <SectionHeading>Mobile</SectionHeading>
        <p>
          Purrfect Farmer can also be installed on Mobile Browsers with Chrome
          Extensions support.
        </p>

        <p>
          Development of the extension has always taken a mobile-first approach.
        </p>

        <p>
          It can run on even the most basic device, allowing you to farm on the
          go.
        </p>

        <CheckList items={["Kiwi Browser", "Mises Browser"]} />
      </div>

      <div className="lg:row-start-1 lg:col-start-1">
        <img src={MobileImage} />
      </div>
    </ContainerGrid>
  );
}
