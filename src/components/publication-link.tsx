"use client";

import Link from "next/link";

interface PublicationLinkProps {
  title: string;
  description: string;
  conference: string;
  href: string;
}

export function PublicationLink({
  title,
  description,
  conference,
  href,
}: PublicationLinkProps) {
  return (
    <Link href={href}>
      <div className="flex flex-col text-sm lg:text-lg lg:text-justify p-2 lg:p-5 hover:bg-gray-200/30 transition-all duration-300 rounded-md">
        <div className="flex items-center justify-between">
          <p className="font-bold">{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 7l-10 10" />
            <path d="M8 7l9 0l0 9" />
          </svg>
        </div>
        <p className="font-medium max-w-xl"><i>{description}</i></p>
        <p className="font-medium max-w-xl">{conference}</p>
      </div>
    </Link>
  );
}
