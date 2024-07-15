import React from "react";

import { Image as ImageType } from "@/type";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { cn } from "@/lib/route";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute size-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image src={image.url} alt="" fill className="object-cover" />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
