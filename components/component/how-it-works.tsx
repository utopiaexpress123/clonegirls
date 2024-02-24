import React from 'react'

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
    <section className="w-full py-12 md:py-24 lg:py-32 text-left">
      <div className="container px-4 md:px-6">
        <div className="space-y-3">
        <div className="grid items-start gap-6 lg:grid-cols-1 lg:gap-12">
          <div className="flex flex-col items-start justify-center space-y-6">
            <div className="flex flex-col items-start justify-center space-y-2">
              <div className="rounded-full border w-12 h-12 flex items-center justify-center border-gray-200 border-gray-200 bg-gray-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <UploadIcon className="w-6 h-6 fill-primary" />
              </div>
              <h3 className="text-xl font-bold">Connect your repository</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get started in seconds. Connect your Git repository and we'll do the rest.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center space-y-2">
              <div className="rounded-full border w-12 h-12 flex items-center justify-center border-gray-200 border-gray-200 bg-gray-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <ImageIcon className="w-6 h-6 fill-primary" />
              </div>
              <h3 className="text-xl font-bold">Get amazing portraits</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Collaborate with your team using built-in code review tools without leaving your workflow.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center space-y-2">
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

function ImageIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function RocketIcon(props) {
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


function UploadIcon(props) {
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

