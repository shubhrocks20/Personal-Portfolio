import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2023",
    title: "BlogPinnacle",
    results: [
      { title: "Developed a modern blogging platform using MERN stack" },
      { title: "Implemented JWT-based authentication for secure sessions" },
      { title: "Integrated Cloudinary for seamless media management" },
      { title: "Designed responsive UI with Tailwind CSS" },
    ],
    link: "https://blogpinnacle.netlify.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "EventEase",
    results: [
      { title: "Built an event management system using MERN stack" },
      { title: "Implemented secure authentication to protect user data" },
      { title: "Integrated Cloudinary for image storage" },
      { title: "Designed intuitive UI with Tailwind CSS" },
    ],
    link: "https://event-ease-mern-frontend.onrender.com/",
    image: lightSaasLandingPage,
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
    link: "https://your-portfolio-link.com/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projectPage">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10   lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="wrapper lg:grid lg:grid-cols-2 lg:gap-16 ">
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
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
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
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center  justify-center gap-2 mt-8 md:w-auto px-6">
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
