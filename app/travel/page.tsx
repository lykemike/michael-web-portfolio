import GlobeComponent from "@/components/interests/Globe";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MoveLeftIcon } from "@/components/MoveLeftIcon";

export default function page() {
  return (
    <div className="relative min-h-screen">
      {/* Back button pinned top-left */}
      <Link href="/interests">
        <Button
          size="sm"
          className="absolute top-4 left-4 hover:cursor-pointer"
        >
          <ArrowBigLeft /> Back
        </Button>
      </Link>

      {/* Globe centered */}
      <div className="flex items-center justify-center min-h-screen">
        <GlobeComponent />
      </div>
    </div>
  );
}
