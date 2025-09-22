import { buttonVariants } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <Link href={"/"} className="flex items-center gap-2.5">
        <User className="size-10 text-blue-500" />
        <h3 className="text-3xl font-bold">
          Invoice<span className="text-blue-500">Agam</span>
        </h3>
      </Link>
      <Link  href={"/login"}>
       <RainbowButton>Get Started</RainbowButton>
      </Link>
    </div>
  );
};

export default Navbar;
