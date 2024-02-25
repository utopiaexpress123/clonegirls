import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import hero from "/public/hero.png";
//import AutoplayVideo from "@/components/ui/autoplayvideo";
//import { Button } from "@/components/ui/button";
//import ExplainerSection from "@/components/ExplainerSection";
//import PricingSection from "@/components/PricingSection";
//import UtopiaLogo from "@/components/UtopiaLogo";
import { MainHero } from "@/components/component/main-hero";
import { HowItWoks } from "@/components/component/how-it-woks";
import { FaqAccordion } from "@/components/component/faq-accordion";


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

    <div className="flex flex-col items-center pt-0">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <div className="">
            <MainHero/>
          </div>
          <div className="px-4 py-6 items-center">
            <HowItWoks/>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-1 lg:mt-0">
          <img
            src={hero.src}
            alt="AI photography of you"
            className="object-cover rounded w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 w-full">
        <FaqAccordion/>
      </div>
    </div>
  );
}
