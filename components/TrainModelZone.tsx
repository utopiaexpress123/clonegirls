"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFemale, FaImages, FaMale, FaRainbow } from "react-icons/fa";
import * as z from "zod";
import { fileUploadFormSchema } from "@/types/zod";
import { upload } from "@vercel/blob/client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type FormInput = z.infer<typeof fileUploadFormSchema>;

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";

export default function TrainModelZone() {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormInput>({
    resolver: zodResolver(fileUploadFormSchema),
    defaultValues: {
      name: "",
      type: "man",
    },
  });

  const onSubmit: SubmitHandler<FormInput> = () => {
    trainModel();
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const newFiles: File[] =
        acceptedFiles.filter(
          (file: File) => !files.some((f) => f.name === file.name)
        ) || [];

      // if user tries to upload more than 10 files, display a toast
      if (newFiles.length + files.length > 10) {
        toast({
          title: "Too many images",
          description:
            "You can only upload up to 10 images in total. Please try again.",
          duration: 5000,
        });
        return;
      }

      // display a toast if any duplicate files were found
      if (newFiles.length !== acceptedFiles.length) {
        toast({
          title: "Duplicate file names",
          description:
            "Some of the files you selected were already added. They were ignored.",
          duration: 5000,
        });
      }

      // check that in total images do not exceed a combined 4.5MB
      const totalSize = files.reduce((acc, file) => acc + file.size, 0);
      const newSize = newFiles.reduce((acc, file) => acc + file.size, 0);

      if (totalSize + newSize > 4.5 * 1024 * 1024) {
        toast({
          title: "Images exceed size limit",
          description:
            "The total combined size of the images cannot exceed 4.5MB.",
          duration: 5000,
        });
        return;
      }

      setFiles([...files, ...newFiles]);

      toast({
        title: "Images selected",
        description: "The images were successfully selected.",
        duration: 5000,
      });
    },
    [files]
  );

  const removeFile = useCallback(
    (file: File) => {
      setFiles(files.filter((f) => f.name !== file.name));
    },
    [files]
  );

  const trainModel = useCallback(async () => {
    setIsLoading(true);
    // Upload each file to Vercel blob and store the resulting URLs
    const blobUrls = [];

    if (files) {
      for (const file of files) {
        const blob = await upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/leap/train-model/image-upload",
        });
        blobUrls.push(blob.url);
      }
    }

    // console.log(blobUrls, "blobUrls");

    const payload = {
      urls: blobUrls,
      name: form.getValues("name").trim(),
      type: form.getValues("type"),
    };

    // Send the JSON payload to the "/leap/train-model" endpoint
    const response = await fetch("/leap/train-model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setIsLoading(false);

    if (!response.ok) {
      const responseData = await response.json();
      const responseMessage: string = responseData.message;
      console.error("Something went wrong! ", responseMessage);
      const messageWithButton = (
        <div className="flex flex-col gap-4">
          {responseMessage}
          <a href="/get-credits">
            <Button size="sm">Get Credits</Button>
          </a>
        </div>
      );
      toast({
        title: "Something went wrong!",
        description: responseMessage.includes("Not enough credits")
          ? messageWithButton
          : responseMessage,
        duration: 5000,
      });
      return;
    }

    toast({
      title: "Model queued for training",
      description:
        "The model was queued for training. You will receive an email when the model is ready to use.",
      duration: 5000,
    });

    router.push("/");
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  const modelType = form.watch("type");

  return (
    <div className="">

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-md flex flex-col gap-8 relative"
        >
            <div className="mx-auto">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-600">
                <Link href="/overview" className="text-sm w-fit ">
                  <Button variant={"link"}>
                    <BackIcon/>
                  </Button>
                </Link>
                Let's start a training
              </h1>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem className="pt-6">
                      <FormLabel className="text-gray-600">Give your model a name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Lucy"
                          {...field}
                          className=" shadow-md text-fuchsia-400 flex flex-col items-center justify-between border-2 rounded-full h-12 bg-gray-100 p-4 hover:bg-accent hover:text-accent-foreground"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                )}
              />
            
            
              <div className="flex flex-col gap-4">
                <FormLabel className="pt-9">Select the type of photos you want to generate</FormLabel>

                <RadioGroup
                  defaultValue={modelType}
                  className="grid grid-cols-3 gap-4"
                  value={modelType}
                  onValueChange={(value) => {
                    form.setValue("type", value);
                  }}
                >
                  <div>
                    <RadioGroupItem
                      value="Business, elegant, costume"
                      id="business"
                      className="peer sr-only"
                      aria-label="business"
                    />
                    <Label
                      htmlFor="business"
                      className="shadow-md flex flex-col items-center justify-between rounded-full bg-transparent p-4 hover:bg-accent hover:text-accent-foreground border-2 peer-data-[state=checked]:border-fuchsia-300 [&:has([data-state=checked])]:bg-fuchsia-300"
                    >
                      Business, Elegant
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="Hot, Flirty"
                      id="hot"
                      className="peer sr-only"
                      aria-label="hot"
                    />
                    <Label
                      htmlFor="hot"
                      className="shadow-md flex flex-col items-center justify-between rounded-full bg-transparent p-4 hover:bg-accent hover:text-accent-foreground border-2 peer-data-[state=checked]:border-fuchsia-300 [&:has([data-state=checked])]:bg-fuchsia-300"
                    >
                      Hot & Flirty
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="Casual, Fun"
                      id="casual"
                      className="peer sr-only"
                      aria-label="casual"
                    />
                    <Label
                      htmlFor="casual"
                      className="shadow-md flex flex-col items-center justify-between rounded-full bg-transparent p-4 hover:bg-accent hover:text-accent-foreground border-2 peer-data-[state=checked]:border-fuchsia-300 [&:has([data-state=checked])]:bg-fuchsia-300"
                    >
                      Casual & Fun
                    </Label>
                  </div>
                </RadioGroup>
              </div>  

              <div
                {...getRootProps()}
                className="rounded-md justify-center align-middle cursor-pointer flex flex-col gap-4"
                  >
                <FormLabel className="pt-9">Upload 4-12 images of the person you want to clone</FormLabel>

                <Dialog>
                  <DialogTrigger className="text-fuchsia-400 text-start text-xs">How to get the best results?</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-xs">How to get the best results?</DialogTitle>
                      <DialogDescription>
                        <ol className="list-decimal">
                          <li>1. Upload both portrait and full body shots of the person</li>
                          <li>2. Use 8-10 pictures of your subject. Preferably cropped to 1:1 aspect ratio.</li>
                          <li>3. Use 6 photos of full body or entire object + 10 medium shot photos from the chest up + 10 close-ups.</li>
                          <li>4. Variation is key - Change body pose for every picture, use pictures from different days backgrounds and lighting. Every picture of your subject should introduce new info about your subject.</li>
                          <li>5. Avoid pictures taken at the same hour/day. For example few pictures with the same shirt will make the model learn the shirt as well as part of the subject.</li>
                          <li>6. Always pick a new background.</li>
                          <li>7. Do not upload pictures mixed with other people</li>
                          <li>8. Do not upload upload funny faces</li>
                        </ol>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <div className="shadow-md outline outline-2 outline-gray-100 rounded-2xl  hover:outline-fuchsia-300 w-full h-full p-4 flex justify-center align-middle">
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p className="self-center">Drop the files here ...</p>
                  ) : (
                    <div className="flex justify-center flex-col items-center gap-2">
                      <UploadIcon/>
                      <p className="self-center text-xs">
                        Drag 'n' drop your photos here, or use your camera
                      </p>
                    </div>
                  )}
                </div>
                {files.length > 0 && (
                  <div className="flex flex-row gap-4 flex-wrap">
                    {files.map((file) => (
                      <div key={file.name} className="flex flex-col gap-1">
                        <img
                          src={URL.createObjectURL(file)}
                          className="rounded-md w-24 h-24 object-cover"
                        />
                        <Button
                          variant="outline"
                          size={"sm"}
                          className="w-full"
                          onClick={() => removeFile(file)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <Button type="submit" className="shadow-xl w-full" isLoading={isLoading}>
                  Train Model{" "}
                  {stripeIsConfigured && <span className="ml-1">(1 Credit)</span>}
                </Button>
              </div>

            </div>

        </form>
      </Form>
    </div>
  );
}

function UploadIcon() {
  return (
<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path className="stroke-fuchsia-300" strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
</svg>
  )
}

function BackIcon() {
  return (
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
  )
}


