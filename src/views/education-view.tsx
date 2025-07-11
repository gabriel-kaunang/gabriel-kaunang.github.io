"use client";

import Link from "next/link";
import Image from "next/image";

import UChicagoImage from "@/assets/uchicago.webp";
import UGadjahMadaImage from "@/assets/ugadjahmada.png";
import NanyangImage from "@/assets/nanyangtechu.png";
import MahidolImage from "@/assets/mahidolu.png";

export function EducationView() {
  // Education
  const education = [
    {
      title: "Ph.D. in Computer Science",
      university: "University of Chicago",
      country: "US",
      date: "2024 to Present",
      // Descriptions are Optional
      description: (
        <p>
          Advisor:{" "}
          <span className="text-blue-500 font-bold hover:underline">
            <Link href="https://people.cs.uchicago.edu/~yanjingl/">
              Prof. Yanjing Li
            </Link>
          </span>
        </p>
      ),
      imageSrc: UChicagoImage.src,
    },
    {
      title: "Bachelor of Computer Science",
      university: "Universitas Gadjah Mada",
      country: "ID",
      date: "2020 to 2024",
      description: (
        <p>
	  Cum Laude Distinction
        </p>
      ),
      imageSrc: UGadjahMadaImage.src,
    },
    {
      title: "Visiting Student",
      university: "Nanyang Technological University",
      country: "SG",
      date: "2022",
      description: (
        <p>
	  Full-Ride Scholarship from Temasek Foundation
        </p>
      ),
      imageSrc: NanyangImage.src,
    },
    {
      title: "Visiting Student",
      university: "Mahidol University",
      country: "TH",
      date: "2022",
      description: (
        <p>
	  Full-Ride Scholarship from Temasek Foundation
        </p>
      ),
      imageSrc: MahidolImage.src,
    },
  ];

  return (
    <div className="flex flex-col gap-2 lg:gap-4 ">
      <p className="text-lg lg:text-4xl font-bold">Education</p>

      <div className="flex flex-col gap-2 text-sm lg:gap-4 font-medium lg:text-lg">
        {education.map((item, index) => (
          <div
            key={index}
            className="flex flex-row-reverse justify-between gap-2 lg:gap-4 items-center"
          >
            <Image
              src={item.imageSrc}
              alt={item.university}
              width={50}
              height={50}
              className="w-16 h-16 object-contain"
            />

            <div className="flex flex-col">
              <div className="flex flex-row gap-1">
                <p>
                  <span className="font-bold">{item.university}</span>,
                </p>
                <p>{item.country}</p>
              </div>

              <div className="flex flex-row gap-1">
                <p>{item.title}</p>
                <p>• </p>
                <p>{item.date}</p>
              </div>

              {item.description && <div>{item.description}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
