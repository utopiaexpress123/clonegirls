/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/t8syqPX5YHx
 */
import { Card } from "@/components/ui/card"

export function HowItWoks() {
  return (
    <>
      <Card className="flex w-full items-start p-4 shadow-lg m-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-lg text-gray-300 dark:text-gray-300 font-extrabold text-6xl">
          1
        </div>
        <div className="grid gap-2 ml-6">
          <p className="text-lg font-semibold">Upload your photos</p>
          <p className="text-sm text-gray-500">
          Use your camera or upload at least 6-12 pictures of you (or the person you want to clone). Make sure that only you are in the picture and that your face is clearly visible.
          </p>
          <img
            alt="Upload an image"
            className="mt-4 object-cover rounded-lg"
            height="auto"
            src="/example.png"
            style={{
              aspectRatio: "full/auto",
              objectFit: "cover",
            }}
            width="full"
          />
        </div>
      </Card>
      <div className="flex items-center justify-center w-full">
        <div className="h-6 w-0.5 bg-gray-200 dark:bg-gray-800" />
      </div>
      <Card className="flex w-full items-start p-4 shadow-lg m-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-lg text-gray-300 dark:text-gray-300 font-extrabold text-6xl">
          2
        </div>
        <div className="grid gap-2 ml-6">
          <p className="text-lg font-semibold">Do the magic</p>
          <p className="text-sm text-gray-500">Our AI-based service able "learn" your unique features and reproduce them down to the smallest detail.</p>
          <img
            alt="02"
            className="mt-4 object-cover rounded-lg"
            height="auto"
            src="/example.png"
            style={{
              aspectRatio: "full/auto",
              objectFit: "cover",
            }}
            width="full"
          />
        </div>
      </Card>
      <div className="flex items-center justify-center w-full">
        <div className="h-6 w-0.5 bg-gray-200 dark:bg-gray-800" />
      </div>
      <Card className="flex w-full items-start p-4 shadow-lg m-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-lg text-gray-300 dark:text-gray-300 font-extrabold text-6xl">
          3
        </div>
        <div className="grid gap-2 ml-6">
          <p className="text-lg font-semibold">Get your amazing photos</p>
          <p className="text-sm text-gray-500">With your own model, any picture can be taken of you, as if you had a professional photographer. The only limit is your imagination.</p>
          <img
            alt="03"
            className="mt-4 object-cover rounded-lg"
            height="auto"
            src="/example.png"
            style={{
              aspectRatio: "full/auto",
              objectFit: "cover",
            }}
            width="full"
          />
        </div>
      </Card>
    </>
  )
}
