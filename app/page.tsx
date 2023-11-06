import { ArrowPathIcon, ArrowTrendingUpIcon, CheckIcon, FaceSmileIcon, FunnelIcon } from "@heroicons/react/24/outline";

import CTA from "./CTA";
import Image from "next/image";
import WaitList from "./WaitList";

const heroDetails = [
  {
    name: "Weekly text with just deals",
    icon: CheckIcon
  },
  {
    name: "No email spam, no marketing fluff",
    icon: CheckIcon
  }
];

const benefits = [
  {
    name: "97% of customers never buy anything",
    icon: FunnelIcon
  },
  {
    name: "Experts drive over 10% more sales",
    icon: ArrowTrendingUpIcon
  },
  {
    name: "Happier customers & less returns",
    icon: FaceSmileIcon
  }
];

const expert_details = [
  {
    name: "We build an AI-powered sales training program for your brand",
    icon: CheckIcon
  },
  {
    name: "Our experts go through rigorous training to learn your brand and inventory",
    icon: CheckIcon
  },
  {
    name: "Experts are ready to help your customers",
    icon: CheckIcon
  }
];

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between py-16 md:py-16 px-4 md:px-8">
      <div className="relative space-y-20 md:space-y-24">
        {/* <img className="top-0 right-0 z-10 absolute mx-auto" src="/pattern.svg" alt="pattern" /> */}
        {/* <div className="max-w-3xl m-auto space-y-16">
          <Image
            // unoptimized
            className="relative mx-auto"
            src="/cleo-logo-name.png"
            alt="Cleo Logo"
            height={92 / 2}
            width={331 / 2}
            priority
          />
          <h1 className="font-serif text-slate-800 text-center text-3xl md:text-5xl leading-tight">
            We help you sell more
            <br />
            with <mark className="highlight">expert assistance</mark>
          </h1>
          <div className="pt-4">
            <CTA />
          </div>
        </div> */}

        <div className="benefits grid md:grid-cols-2 items-center  max-w-4xl m-auto space-x-16">
          <div className="order-last md:order-first px-16 md:px-0 mt-16">
            <Image
              unoptimized
              className="relative mx-auto"
              src="/cleo-landing-screen.png"
              alt="Cleo Logo"
              height={600}
              width={350}
              priority
            />
          </div>
          <div className="flex-1">
            <div className="space-y-8">
              <Image
                // unoptimized
                className="relative"
                src="/cleo-logo-name.png"
                alt="Cleo Logo"
                height={92 / 2}
                width={331 / 2}
                priority
              />
              <h2 className=" text-4xl font-serif">Deal digest for the brands you love</h2>
              <div className="px-8 md:px-0 text-lg space-y-4 -ml-10">
                {heroDetails.map((detail) => (
                  <div className="flex space-x-3 text-stone-600" key={detail.name}>
                    <detail.icon className="flex-0 h-8 w-8 text-pink-600/75" aria-hidden="true" />
                    <div className="flex-1">{detail.name}</div>
                  </div>
                ))}
              </div>

              <CTA />
            </div>
          </div>
        </div>

        {/* <div className="max-w-4xl m-auto px-4 md:px-0">
          <div className="relative bg-white px-8 py-6 md:px-16 md:py-12  rounded-2xl shadow-lg shadow-stone-500/10">
            <div className="relative z-10 space-y-6">
              <h2 className="font-serif text-4xl">Transparent, commission-only pricing</h2>

              <ul className="space-y-2 list-image-[url(check.png)]">
                <li className="text-md md:text-xl">9% of net sales converted by Cleo experts.</li>
                <li className="text-md md:text-xl">No fixed or setup fees.</li>
              </ul>
              <p className="text-md text-stone-500">
                This means you only pay us when our experts convert a sale for you.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="max-w-4xl m-auto">
          <div className="grid md:grid-cols-5 gap-y-24 items-center">
            <div className="md:col-span-2">
              <Image
                unoptimized
                className="relative mx-auto"
                src="/happy-customer.png"
                alt="Cleo Logo"
                height={250}
                width={250}
                priority
              />
            </div>
            <div className="md:col-span-3 px-4 space-y-6">
              <h2 className=" text-2xl text-center md:text-left text-stone-800">
                Our experts are sales assistants and athletes who have received{" "}
                <mark className="highlight">extensive training</mark>
              </h2>
              <div className="px-8 md:px-0 text-lg space-y-4 -ml-10">
                {expert_details.map((detail) => (
                  <div className="flex space-x-3 text-stone-600" key={detail.name}>
                    <detail.icon className="flex-0 h-8 w-8 text-pink-600/75" aria-hidden="true" />
                    <div className="flex-1">{detail.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="max-w-4xl m-auto">
          <div className="bg-white px-8 py-6 md:px-16 md:py-12  rounded-2xl shadow-lg shadow-stone-500/10 border border-stone-200/25 text-center">
            <h2 className="font-serif text-4xl">Simple installation</h2>
            <div className="mt-6 space-y-6 md:space-y-12">
              <p className="text-lg">Install Cleo with one click with our Shopify App</p>
              <CTA />
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
