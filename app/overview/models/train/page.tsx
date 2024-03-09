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


export default async function Index() {
  return (
    <div className="max-auto">
      <div
        id="train-model-container"
        className="flex flex-1 flex-col pt-8"
      >
        <Card className="bg-transparent shadow-none">
          <CardContent className="grid gap-6">
            <TrainModelZone />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
