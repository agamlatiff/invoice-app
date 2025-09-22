import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <section className="z-100 relative flex flex-col items-center justify-center py-30 lg:py-40">
        <div className="text-center">
          <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
            Introducing InvoiceAgam
          </span>

          <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
            Invoicing made{" "}
            <span className="block -mt-2 bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
              super easy!
            </span>
          </h1>
          <p className="max-w-xl mx-auto mt-4 lg:text-lg text-muted-foreground">
            Creating Invoices can be a pain! We at InvoiceAgam make it super
            easy for you to get paid in time!
          </p>
          <div className="mt-7 mb-12">
            <Link href={"/login"} className="mt-5">
              <RainbowButton>Get Unlimited Access</RainbowButton>
            </Link>
          </div>
        </div>


        <div className="relative items-center w-full py-12 mx-auto mt-12">
          <Image
            src={"/hero-image.png"}
            alt="Hero Image"
            width={1500}
            height={1500}
            className="relative object-cover w-full border rounded-lg lg:rounded-2xl shadow-xl"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
