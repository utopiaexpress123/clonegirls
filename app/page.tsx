import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import hero from "/public/hero.png";
//import AutoplayVideo from "@/components/ui/autoplayvideo";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
//import PricingSection from "@/components/PricingSection";
//import UtopiaLogo from "@/components/UtopiaLogo";


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

    <div className="flex flex-col items-center pt-2">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-4xl font-extrabold">
          This is not an insta-filter - It's real magic
          </h1>
          <p className="text-gray-600 text-lg">
          Upload some photos of you, and create your digital clone.
          Our AI-based service is able to "learn" your unique characteristics, 
          create your digital counterpart, and take breathtaking pictures featuring you.
          </p>
          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button className="w-full lg:w-1/2">Get your portraits</Button>
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
        <div className="lg:w-1/2 w-full mt-1 lg:mt-0">
          <img
            src={hero.src}
            alt="AI Headshot Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <ExplainerSection />


    </div>
  );
}
