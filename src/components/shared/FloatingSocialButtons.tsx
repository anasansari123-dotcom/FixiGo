import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/metadata";

export function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      <a
        href={siteConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-lg shadow-[#dd2a7b]/30 transition-transform hover:scale-110 hover:shadow-xl"
      >
        <InstagramIcon className="h-7 w-7" />
      </a>

      <a
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 hover:shadow-xl"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
