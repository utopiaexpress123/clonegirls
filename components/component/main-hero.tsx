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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bring to life your digital clone</h1>
          <p className="py-2 text-lg max-w-[700px] text-gray-500 dark:text-gray-400">
          Create your digital counterpart, and take breathtaking pictures featuring you.
          It's pure magic!
          </p>
          <div>
             <span className="text-sm">from </span><span className="text-lg text-bold">12€</span>
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
            I'am a girl&nbsp;&nbsp; 
            </Link>
            <Link
              className="inline-flex w-100 items-center rounded-full shadow-lg hover:shadow-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-100 text-black-800 text-sm font-normal px-2 py-1 ml-2"
              href="./login"
              style={{
                borderRadius: "50px",
              }}
            >
            <img
              alt="Double helix"
              className="rounded-full mr-2"
              height={34}
              src="/kep2.gif"
              style={{
                aspectRatio: "34/34",
                objectFit: "cover",
              }}
              width={34}
            />
            I'am a boy&nbsp;&nbsp; 
            </Link>
          </div>
        </div>
      </section>
    )
  }
  
  