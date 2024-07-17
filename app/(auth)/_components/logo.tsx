import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image width="80" height="80" src="/twitch.svg" alt="strix" />
      <div className={cn("flex flex-col items-center",font.className)}>
        <p className="text-xl font-semibold">
            Strix
        </p>
        <p className="text-sm text-muted-foreground">Let&apos;s play</p>
      </div>
    </div>
  );
};
