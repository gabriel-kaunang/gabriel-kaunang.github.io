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
      <p className="text-lg lg:text-4xl font-bold hidden lg:block">Bio</p>

      {/* Bio */}
      <div className="flex flex-col gap-4 text-sm lg:gap-4 font-medium lg:text-lg lg:text-justify">
        <p>
          I am a first year Computer Science Ph.D. student at the University of
          Chicago, currently advised by{" "}
          <span className="text-blue-500 font-bold hover:underline">
            <Link href="https://people.cs.uchicago.edu/~yanjingl/">
              Prof. Yanjing Li
            </Link>
          </span>
          . Prior to that, I received a Bachelor’s Degree in Computer Science 
	  from Universitas Gadjah Mada (UGM), Indonesia. My current research 
	  revolves around diagnosis of silent errors in deep-learning accelerators 
	  alongside assessing accelerator resilience on DNN inference workloads.
        </p>
      </div>
    </div>
  );
}
