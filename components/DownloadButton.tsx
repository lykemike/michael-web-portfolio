"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { DownloadIcon } from "./DownloadIcon";

export default function DownloadButton() {
  const handleOpen = () => {
    window.open("/Michael-Kevin-Montolalu-Resume.pdf");
    // no extra features needed; browser will open PDF in new tab if possible
  };

  return (
    <Button className="cursor-pointer" size="sm" onClick={handleOpen}>
      Download Resume
      <DownloadIcon className="w-5 h-5" />
    </Button>
  );
}
