"use client";

import { PublicationLink } from "@/components/publication-link";

export function PublicationsView() {
  const publications = [
    {
      title:
        "Silent Data Corruption: Advancing Detection, Diagnosis, and Mitigation Strategies",
      description:
        "Peter Domanski*, Mukarram Ali Faridi*, Gabriel Kaunang* (co-first author), Wilson Pradeep, Adit Singh, Muhammad Alfian Amrizal, Yanjing Li, Farshad Firouzi, and Krishnendu Chakrabarty",
      conference: "The 43rd IEEE VLSI Test Symposium (VTS'25)",
      href: "https://ieeexplore.ieee.org/document/11022867",
    },
    {
      title:
        "An Advantage Actor-Critic Deep Reinforcement Learning Method for Power Management in HPC Systems",
      description:
        "Fitra Rahmani Khasyah, Kadek Gemilang Santiyuda, Gabriel Kaunang, Faizal Makhrus, Muhammad Alfian Amrizal, and Hiroyuki Takizawa",
      conference:
        "The 23rd International Conference on Parallel and Distributed Computing, Applications and Technologies (PDCAT'22)",
      href: "https://link.springer.com/chapter/10.1007/978-3-031-29927-8_8",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg lg:text-4xl font-bold">Publications</p>

      <div className="flex flex-col text-sm font-medium lg:text-lg">
        {publications.map((pub, index) => (
          <PublicationLink
            key={index}
            title={pub.title}
            description={pub.description}
            conference={pub.conference}
            href={pub.href}
          />
        ))}
      </div>
    </div>
  );
}
