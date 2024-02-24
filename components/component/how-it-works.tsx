import React from 'react';
import Link from "next/link";

export interface UploadIconProps {
  className?: string;
}

export interface CodeIconProps {
  className?: string;
}

export interface RocketIconProps {
  className?: string;
}

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-3 text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          How It Works
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Use your camera or upload at least 6-12 pictures of you (or the person you want to clone). Make sure that only you are in the picture and that your face is clearly visible.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
          <Link
            href="#"
          >
            Learn more
          </Link>
          about how to get the best results.</p>
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-1 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="rounded-full border w-12 h-12 flex items-center justify-center border-gray-200 border-gray-200 bg-gray-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <UploadIcon className="w-6 h-6 fill-primary" />
              </div>
              <h3 className="text-xl font-bold">The magic begins</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="rounded-full border w-12 h-12 flex items-center justify-center border-gray-200 border-gray-200 bg-gray-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <CodeIcon className="w-6 h-6 fill-primary" />
              </div>
              <h3 className="text-xl font-bold">Code review workflow</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Collaborate with your team using built-in code review tools without leaving your workflow.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="rounded-full border w-12 h-12 flex items-center justify-center border-gray-200 border-gray-200 bg-gray-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <RocketIcon className="w-6 h-6 fill-primary" />
              </div>
              <h3 className="text-xl font-bold">Deploy with confidence</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Automate your workflow with continuous integration and delivery. Deploy to the cloud with a single click
                and scale with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function UploadIcon(props: UploadIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function CodeIcon(props: CodeIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function RocketIcon(props: RocketIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}