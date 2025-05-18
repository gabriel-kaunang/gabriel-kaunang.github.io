"use client";

export function ExperienceRow({
  title,
  company,
  date,
}: {
  title: string;
  company: string;
  date?: string;
}) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-xs md:text-sm lg:text-lg font-bold">{title}</p>
        {date && <p className="text-xs lg:text-base font-light">{date}</p>}
      </div>
      <p className="font-medium text-xs md:text-sm lg:text-lg">{company}</p>
    </div>
  );
}
