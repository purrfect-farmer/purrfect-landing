import AppIcon from "@/assets/images/icon-unwrapped-cropped.png?format=webp&h=480";
import { FaChrome, FaCode, FaGithub, FaTelegram } from "react-icons/fa6";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { cn } from "@/lib/utils";

const FooterButton = ({
  icon: Icon, // eslint-disable-line
  ...props
}) => (
  <a
    {...props}
    target="_blank"
    className={cn(
      "bg-neutral-800",
      "p-3 rounded-full",
      "inline-flex items-center justify-center gap-2",
      props.className
    )}
  >
    <Icon className="text-orange-500 size-4" />
  </a>
);

export default function Footer() {
  return (
    <div className="p-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        <img src={AppIcon} className="h-28 mx-auto" />
        <div
          className={cn(
            "flex justify-center items-center",
            "flex-wrap gap-2 bg-black p-2 rounded-full mx-auto"
          )}
        >
          <FooterButton
            href={import.meta.env.VITE_APP_TELEGRAM_CHANNEL}
            icon={FaChrome}
            title="Extension"
          />

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
        <div className="text-center">&copy; Purrfect Farmer</div>
      </div>
    </div>
  );
}
