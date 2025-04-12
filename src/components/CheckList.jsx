import { HiCheckCircle } from "react-icons/hi2";

export default function CheckList({ items }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <HiCheckCircle className="text-orange-500 size-5 shrink-0" />
          <h4 className="font-bold text-orange-800 grow">{item}</h4>
        </div>
      ))}
    </div>
  );
}
