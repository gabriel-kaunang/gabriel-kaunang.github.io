"use client";
import Image from "next/image";
import GabsImage from "@/assets/gabs.jpeg";
import Link from "next/link";

export default function BioView() {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      {/* Image only rendered on mobile */}
      <Image
        src={GabsImage.src}
        alt="Gabriel Kaunang"
        width={100}
        height={100}
        className="rounded-full w-24 h-auto lg:hidden"
      />

      {/* Header */}
      <p className="text-lg lg:text-4xl font-bold hidden lg:block">About</p>

      {/* Bio */}
      <div className="flex flex-col gap-4 text-sm lg:gap-4 font-medium lg:text-lg lg:text-justify">
        <p>
          I am a second year Computer Science Ph.D. student at the University of
          Chicago, currently advised by Yanjing Li. Prior to that, I 
	  received a Bachelor’s Degree in Computer Science from Universitas Gadjah 
	  Mada, Indonesia.         
	</p>
	<p>
	  My current research involves diagnosis of silent errors in 
	  deep-learning accelerators alongside assessing accelerator resilience 
	  on DNN inference workloads.
        </p>
      </div>
    </div>
  );
}
