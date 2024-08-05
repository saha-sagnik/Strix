import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div
        className="flex items-center 
      gap-x-4 hover:opacity-75 transition"
      >
        <div className="bg-white rounded-full p-1 mr-10 lg:mr-0 lg:shrink shrink-0">
          <Image src="/twitch.svg" alt="strix" height="32" width="32" />
        </div>
        <div className={cn("hidden lg:block",font.className)}>
          <p className="text-lg font-semibold text-muted-foreground">Strix</p>
          <p>Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};
