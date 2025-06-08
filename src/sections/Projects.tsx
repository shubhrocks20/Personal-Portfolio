import Image from "next/image";
import xpenzaPoster from "@/assets/images/xpenza.png";
import portfolio from "@/assets/images/portfolio.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "Xpenza",
    results: [
      { title: "Built an AI-powered expense tracker using MERN stack" },
      {
        title: "Integrated OpenAI and MCP for personalized financial insights",
      },
      {
        title:
          "Achieved 90%+ accuracy in real-time bill classification via Tabscanner OCR and GPT parsing",
      },
      {
        title: "Designed interactive dashboards with Chart.js and Tailwind CSS",
      },
      {
        title:
          "Implemented secure JWT-based auth with multi-device session management",
      },
    ],
    link: "https://xpenza.kshubham.me",
    image: xpenzaPoster,
  },

  {
    company: "Personal Project",
    year: "2024",
    title: "Portfolio Website",
    results: [
      { title: "Designed and developed a personal portfolio using Next.js" },
      { title: "Showcased key projects and skills with interactive UI" },
      { title: "Optimized performance and responsiveness across devices" },
      { title: "Implemented modern design techniques using Tailwind CSS" },
    ],
    link: "https://portfolio.kshubham.me",
    image: portfolio,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-12 sm:pb-16 md:py-24 px-2 sm:px-0" id="projectPage">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-8 md:mt-20 gap-10 md:gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-4 sm:px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 md:text-base text-sm text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a target="blank" href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 text-base md:text-lg">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
