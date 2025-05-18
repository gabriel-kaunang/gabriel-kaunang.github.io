"use client";

export function NewsView() {
  const news = [
    {
      date: "2025/2",
      article: <>Gave a talk on our <span className="font-bold">Special Sessions Paper on Silent Data Corruption</span> at VTS'25!</>,
    },
    {
      date: "2024/9",
      article: "Started my Ph.D. at the University of Chicago!",
    },
    {
      date: "2024/5",
      article:
        "Completed my Bachelor's Degree from Universitas Gadjah Mada!",
    },
  ];

  return (
    <div className="flex flex-col gap-2 lg:gap-4 ">
      <p className="text-lg lg:text-4xl font-bold">News</p>

      <div className="flex flex-col gap-2 text-sm lg:gap-4 font-medium lg:text-lg">
        {news.map((item, index) => (
          <li key={index} className="flex gap-1">
            <span className="font-semibold">•</span>
            <span className="font-semibold">{item.date}</span>
            <span className="font-semibold"> : </span>
            <span>{item.article}</span>
          </li>
        ))}
      </div>
    </div>
  );
}
