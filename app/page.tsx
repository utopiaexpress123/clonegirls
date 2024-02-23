import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import hero from "/public/hero.png";

import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (


    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid items-center gap-10 px-6 md:px-10 lg:gap-16 lg:grid-cols-2">
      <div className="flex items-center">
        <img
          alt="Image"
          className="aspect-[2/1] rounded-xl object-cover"
          height="300"
          src="/placeholder.svg"
          width="600"
        />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to the Platform
          </h1>
          <p className="max-w-[500px] text-gray-500 md:text-xl dark:text-gray-400">
            The complete platform for building the modern web. One toolkit. Zero configuration.
          </p>
        </div>
        <div>
          <Link
            className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </section>

  
    <div className="flex flex-col items-center pt-1">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold">
          Finally have a good photo of you!
          </h1>
          <p className="text-gray-600 text-lg">
         You are not so photogenic?
Solved by AI! Train a custom model with your f*ucked up photos, and create your good lookin' clone
          </p>
          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button className="w-full lg:w-1/2">Get Your Headshots</Button>
            </Link>
            <p className="text-sm text-gray-500 italic">
              Trusted by professionals worldwide. Quick and efficient.
            </p>
          </div>
          <div className="mt-4 text-gray-500">
            <span>Already a member? </span>
            <Link className="text-blue-600 hover:underline" href="/login">
              Sign In
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img
            src={hero.src}
            alt="AI Headshot Illustration"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <ExplainerSection />
      <PricingSection />
    </div>
  );
}
