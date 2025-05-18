"use client";

import { ExperienceRow } from "@/components/experience-row";

export default function ExperienceView() {
  // Experience Rows
  const professionalExperience = [
    {
      title: "Graduate Research Assistant",
      company: "University of Chicago",
      date: "Sep 2024 - Aug 2025",
    },
    {
      title: "Undergraduate Researcher",
      company: "Garuda Ilmu Komputer",
      date: "Jan 2023 - May 2024",
    },
    {
      title: "Cloud Devops Engineer",
      company: "Elitery",
      date: "Nov 2022 - Dec 2022",
    },
    {
      title: "Teaching Assistant",
      company: "Universitas Gadjah Mada",
      date: "Aug 2022 - Dec 2022",
    },
    {
      title: "Mobility Support",
      company: "Office of International Affairs @ UGM",
      date: "Aug 2021 - Aug 2022",
    },
  ];

  // Education
  const education = [
    {
      title: "Doctor of Philosophy",
      company: "University of Chicago",
      date: "2024 - Present",
    },
    {
      title: "B.Sc. in Computer Science",
      company: "Universitas Gadjah Mada",
      date: "2020 - 2024",
    },
    {
      title: "Student Exchange Program",
      company: "Nanyang Technological University",
      date: "2022",
    },
    {
      title: "Student Exchange Program",
      company: "Mahidol University",
      date: "2022",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate (SAA)",
      company: "Amazon Web Services",
    },
    {
      title: "AWS Certified Cloud Practitioner (CLF)",
      company: "Amazon Web Services",
    },
    {
      title: "Alibaba Cloud Associate",
      company: "Alibaba Cloud",
    },
  ];

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      {/* Header */}

      <p className="text-lg lg:text-4xl font-bold">Experiences</p>

      {/* Professional */}
      <div className="flex flex-col gap-2 lg:gap-4">
        <p className="text-lg lg:text-2xl font-bold">Professional</p>
        <div className="flex flex-col ml-4 gap-2 lg:gap-4">
          {professionalExperience.map((experience, index) => (
            <ExperienceRow
              key={index}
              title={experience.title}
              company={experience.company}
              date={experience.date}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full lg:w-2xl self-center h-[1px] bg-gray-300"></div>

      {/* Education */}
      <div className="flex flex-col gap-2 lg:gap-4">
        <p className="text-lg lg:text-2xl font-bold">Education</p>
        <div className="flex flex-col ml-4 gap-2 lg:gap-4">
          {education.map((education, index) => (
            <ExperienceRow
              key={index}
              title={education.title}
              company={education.company}
              date={education.date}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full lg:w-2xl self-center h-[1px] bg-gray-300"></div>

      {/* Certifications */}
      <div className="flex flex-col gap-2 lg:gap-4">
        <p className="text-lg lg:text-2xl font-bold">Certifications</p>
        <div className="flex flex-col ml-4 gap-2 lg:gap-4">
          {certifications.map((certification, index) => (
            <ExperienceRow
              key={index}
              title={certification.title}
              company={certification.company}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
