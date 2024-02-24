/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/GvJ50E05JIq
 */
import Link from "next/link"

export function MainHero() {
    return (
      <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24">
        <div className="container px-4 md:px-6 flex flex-col items-start gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">This is not an insta-filter - It's real magic</h1>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
          Upload some photos of you, and create your digital clone.
          Our AI-based service is able to "learn" your unique characteristics, 
          create your digital counterpart, and take breathtaking pictures featuring you.
          </p>
          <Link
            className="inline-flex h-10 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
            style={{
              borderRadius: "50px",
            }}
          >
            <img
              alt="Double helix"
              className="rounded-full mr-2"
              height={34}
              src="/placeholder.svg"
              style={{
                aspectRatio: "34/34",
                objectFit: "cover",
              }}
              width={34}
            />
            Create Your Clone
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Already a member?
            <Link className="underline" href="#">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    )
  }
  
  