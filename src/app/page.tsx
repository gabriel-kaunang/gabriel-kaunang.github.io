import BioView from "@/views/bio-view";
import ExperienceView from "@/views/experience-view";
import { NewsView } from "@/views/news-view";
import PublicationsView from "@/views/publications-view";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <section id="bio" className="scroll-mt-20">
        <BioView />
      </section>
      {/* <section id="experience" className="scroll-mt-20">
        <ExperienceView />
      </section> */}
      <section id="news" className="scroll-mt-20">
        <NewsView />
      </section>
      <section id="publications" className="scroll-mt-20">
        <PublicationsView />
      </section>
    </div>
  );
}
