import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";

import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Rohit Sharma",
    position: "Software Engineer @ Qpsiders",
    text: "Shubham's full-stack expertise truly shined when we collaborated on a project. His ability to quickly grasp complex technical requirements and implement them flawlessly was impressive. A reliable team player with a strong grasp of React and Node.js.",
    avatar: memojiAvatar1,
  },
  {
    name: "Priya Verma",
    position: "Lead Developer @ Jspdier",
    text: "Shubham has a deep understanding of both frontend and backend technologies. His work on creating a seamless and responsive UI using React and Tailwind CSS made our project stand out. His problem-solving skills in data structures and algorithms were a huge asset.",
    avatar: memojiAvatar2,
  },
  {
    name: "Aman Patel",
    position: "Project Manager @ Kodecorp",
    text: "Shubham played a key role in developing our event management system. His ability to handle backend operations with Node.js and MongoDB while maintaining a clean, intuitive UI made the project a huge success. I highly recommend him for any full-stack role.",
    avatar: memojiAvatar3,
  },
  {
    name: "Nisha Kapoor",
    position: "Frontend Developer @ clayHR",
    text: "Shubham's dedication to learning and mastering new technologies is unmatched. His work with ReactJS and Tailwind CSS brought our ideas to life, and his knowledge of secure authentication using JWT ensured that our users' data was always protected.",
    avatar: memojiAvatar4,
  },
  {
    name: "Vikram Singh",
    position: "CTO @ RTM",
    text: "Shubham is an exceptional developer who is proficient in both frontend and backend. His work on BlogPinnacle showcased his ability to design user-friendly interfaces while handling complex backend logic using the MERN stack. A true asset to any tech team.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Friend Feedback"
          title="What My Friends Say About Me"
          description="Hear what my friends have to say about my work and skills."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 rounded-full justify-center items-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold ">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
