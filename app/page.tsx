import { ArrowPathIcon, ArrowTrendingUpIcon, CheckIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

import CTA from "./CTA";
import Image from "next/image";
import WaitList from "./WaitList";

const benefits = [
  {
    name: "Increase conversion by 15%",
    icon: ArrowTrendingUpIcon
  },
  {
    name: "Increase customer satisfaction",
    icon: FaceSmileIcon
  },
  {
    name: "Reduce returns",
    icon: ArrowPathIcon
  }
];

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between py-36 px-8">
      <div className="space-y-48 ">
        <div className="relative space-y-16 text-center max-w-3xl m-auto">
          <Image
            unoptimized
            className="relative mx-auto"
            src="/cleo-logo-name.png"
            alt="Cleo Logo"
            height={92}
            width={331}
            priority
          />
          <h1 className="font-serif text-slate-800 text-center text-5xl leading-tight">
            Increase your outdoor gear sales
            <br />
            with <mark className="highlight">expert assistance</mark>
          </h1>
          <div className="pt-4">
            <CTA />
          </div>
        </div>

        <div className="benefits flex max-w-3xl m-auto">
          <div className="flex-1 text-2xl">
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <li className="flex space-x-3 font-slate-800" key={benefit.name}>
                  <benefit.icon className="h-8 w-8 text-pink-500/75" aria-hidden="true" />
                  <span>{benefit.name}</span>
                </li>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image
              unoptimized
              className="relative mx-auto"
              src="/app-mock.png"
              alt="Cleo Logo"
              height={300}
              width={200}
              priority
            />
          </div>
        </div>

        <div className="max-w-4xl m-auto">
          <div className="bg-white px-16 py-12  rounded-2xl shadow-xl shadow-orange-600/5">
            <h2 className="font-serif text-4xl">Transparent pricing</h2>
            <div className="mt-6 space-y-2">
              <p className="text-lg">We take 6% of your net sales powered by Cleo experts.</p>
              <p className="text-md text-slate-500">
                This means you only pay us when our experts convert a sale for you.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl m-auto">
          <div className="flex space-x-20">
            <div className="flex-0">
              <Image
                unoptimized
                className="relative mx-auto"
                src="/experts-mock.png"
                alt="Cleo Logo"
                height={300}
                width={200}
                priority
              />
            </div>
            <div className="flex-1 text-xl">
              <div className="space-y-8">
                <div className="flex space-x-2 font-slate-800">
                  <CheckIcon className="flex-0 inline h-10 w-10 text-pink-500/75" aria-hidden="true" />
                  <div className="flex-1">
                    Our experts are sales assistants and athletes who have received extensive training.
                  </div>
                </div>

                <div className="flex space-x-2 font-slate-800">
                  <CheckIcon className="flex-0 inline h-10 w-10 text-pink-500/75" aria-hidden="true" />
                  <div className="flex-1">
                    We ensure that our experts are equipped to provide the highest quality customer service to your
                    customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl m-auto">
          <div className="bg-white px-16 py-12  rounded-2xl shadow-xl shadow-orange-600/5 text-center">
            <h2 className="font-serif text-4xl">One-click installation</h2>
            <div className="mt-6 space-y-2">
              <p className="text-lg">Install Cleo with one click with our Shopify App</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl m-auto">
          <div className="text-center space-y-12">
            <div className="mt-6 space-y-2">
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
