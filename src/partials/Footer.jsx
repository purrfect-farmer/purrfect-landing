import { FaCode, FaGithub, FaTelegram } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";

const FooterButton = ({
  icon: Icon, // eslint-disable-line
  ...props
}) => (
  <a
    {...props}
    target="_blank"
    className={cn(
      "bg-orange-200",
      "p-3 rounded-full",
      "inline-flex items-center justify-center gap-2",
      props.className
    )}
  >
    <Icon className="text-orange-500 w-5 h-5" />
  </a>
);

export default function Footer() {
  return (
    <div className="p-10">
      <div className=" rounded-2xl p-4 max-w-5xl mx-auto flex flex-col gap-4">
        <div className="flex justify-center items-center flex-wrap gap-4">
          <FooterButton
            href={import.meta.env.VITE_APP_DEV}
            icon={FaCode}
            title="Developer"
          />

          <FooterButton
            href={import.meta.env.VITE_APP_TELEGRAM_CHANNEL}
            icon={FaTelegram}
            title="Channel"
          />

          <FooterButton
            href={import.meta.env.VITE_APP_TELEGRAM_CHAT}
            icon={HiOutlineChatBubbleBottomCenter}
            title="Chat"
          />

          <FooterButton
            href={import.meta.env.VITE_APP_GITHUB}
            icon={FaGithub}
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
}
