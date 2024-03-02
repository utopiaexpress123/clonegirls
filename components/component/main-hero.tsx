/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/GvJ50E05JIq
 */
import React from 'react';
import Link from "next/link";

export function MainHero() {
    return (
      <section className="w-full">
        <div className="container px-4 md:px-6 flex flex-col items-start gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet your digital twin</h1>
          <p className="py-2 text-lg max-w-[700px] text-gray-500 dark:text-gray-400">
          Create your AI counterpart, and make breathtaking pictures featuring you.
          It's you, in your perfect form. It's pure magic!
          </p>
          <div className="flex items-center">
             <Link
              className="inline-flex w-100 items-center rounded-full shadow-lg hover:shadow-xl bg-pink-50 hover:bg-pink-100 dark:bg-pink-100 text-black-800 text-sm font-normal px-2 py-1 mr-2"
              href="./login"
              style={{
                borderRadius: "50px",
              }}
            >
            <img
              alt="Double helix"
              className="rounded-full mr-2"
              height={34}
              src="/kep.gif"
              style={{
                aspectRatio: "34/34",
                objectFit: "cover",
              }}
              width={34}
            />
            Get your awesome portraits&nbsp;&nbsp; 
            </Link>
            <span className="text-sm font-thin">21 photo </span><span className="text-lg font-bold">12€ </span>
          </div>
        </div>
      </section>
    )
  }
  
  