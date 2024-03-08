import TrainModelZone from "@/components/TrainModelZone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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


export default async function Index() {
  return (
    <div className="w-full ">
      <div
        id="train-model-container"
        className="flex flex-1 flex-col gap-2 px-2"
      >
        <Link href="/overview" className="text-sm w-fit">
          <Button variant={"outline"}>
            <FaArrowLeft className="mr-2" />
            Go Back
          </Button>
        </Link>
        <Card>
          <CardHeader>
            <CardTitle>Train a female model</CardTitle>
            <CardDescription>
              Choose a name, type, and upload some photos to get started. 
              <Dialog>
                <DialogTrigger className="text-fuchsia-400">How to get the best results?</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>How to get the best results?</DialogTitle>
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
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <TrainModelZone />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
