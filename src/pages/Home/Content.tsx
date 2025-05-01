import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsMortarboardFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { FaArrowRightLong } from "react-icons/fa6";
function Content() {
  const Dates = new Date();
  const Years = Dates.getFullYear();
  const summary =
    "I'm a front-end developer passionate about creating interactive and visually engaging web experiences. I specialize in React, Vite, Tailwind CSS, and Framer Motion, bringing modern designs to life with smooth animations and responsive layouts. Always eager to learn and improve, I focus on building user-friendly interfaces that enhance the web experience";
  return (
    <>
      <BlurFade className="grid gap-6 justify-center mt-20 max-w-2xl m-auto">
        <div className="m-auto">
          <img className="w-40 rounded-full" src="newprofile.jpg" alt="" />
        </div>
        <div className="text-center">
          <TypingAnimation className="flex items-center h-10 font-bold text-3xl">
            Hi! I'm Rainer ☺️
          </TypingAnimation>
          <div className="text-md ">
            <AuroraText>Front-End</AuroraText> Developer
          </div>

          <div className="text-md opacity-80">Bataan,Philippines</div>
          <div className="flex justify-center mt-6 gap-2">
            <a href="https://github.com/RainerMorales">
              <FaSquareGithub size={30} />
            </a>
            <a href="https://www.facebook.com/share/1KPaDDbDwH/">
              <FaFacebookSquare size={30} />
            </a>
            <a href="https://www.instagram.com/ka.rainerr?igsh=MWw1dXVqbGtwd2xsdQ==">
              <FaSquareInstagram size={30} />
            </a>
          </div>
        </div>
      </BlurFade>
      <BlurFade
        delay={0.2}
        className="mt-20 p-4 grid lg:grid-cols-3 md:grid-cols-3 md:grid-rows-2 gap-4 max-w-4xl m-auto "
      >
        <div className="lg:col-span-1 md:col-span-1 space-y-4 p-6 border rounded-md ">
          <h1 className="font-bold text-xl flex items-center gap-2">
            <IoBookSharp />
            Summary
          </h1>
          <p className="opacity-80">{summary}</p>
        </div>
        <div className="lg:col-span-2 md:col-span-2 space-y-4 p-6 border rounded-md  ">
          <h1 className="font-bold text-xl flex items-center gap-2">
            <FaLaptopCode />
            Tech Stack
          </h1>
          <div className="space-x-2">
            <span className="opacity-80 ">Front-End</span>
            <ul className="flex  flex-wrap gap-2 mt-1">
              {[
                "HTML",
                "CSS",
                "Javascript",
                "Typescript",
                "Tailwind CSS",
                "Bootstrap",
                "React js",
                "Vite",
                "Node js",
              ].map((tool) => (
                <li className="text-center" key={tool}>
                  <Badge className="">{tool}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-2">
            <span className="opacity-80 ">Developer Tools</span>
            <ul className="flex flex-wrap gap-2 mt-1">
              {[
                "Git",
                "Magic UI",
                "GitHub",
                "VS Code",
                "NPM",
                "Vercel",
                "Daisy UI",
                "Framer Motion",
                "React Bits",
              ].map((tool) => (
                <li className="text-center" key={tool}>
                  <Badge className="">{tool}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-4 p-6 border rounded-md ">
          <h1 className="font-bold text-xl flex items-center gap-2">
            <BsMortarboardFill />
            Education
          </h1>
          <div className="text-sm flex justify-between items-center">
            <span className="opacity-80 ">BS in Information Technology</span>
            <Badge className="">2024</Badge>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-2 p-2 border rounded-sm ">
          <div className="flex items-center justify-between p-4">
            <div className="text-xl  font-bold">Recent Projects</div>
            <Link
              className="text-sm flex items-center gap-2 link link-hover font-mono opacity-80"
              to={"/Projects"}
            >
              View All <FaArrowRightLong/>
            </Link>
          </div>
          <Card
            names={"Todo-List"}
            description={
              "My to-do list app, built with React, Tailwind CSS, and ShadCN UI, lets users create and delete tasks, with persistent storage using the browser's localStorage."
            }
            pic={
              <img
                className="w-full h-full object-cover"
                src="todo.png"
                alt="image"
              />
            }
            link={
              <a
                className="link link-hover font-mono opacity-80 "
                href="https://react-todolist2025.vercel.app/"
              >
                Visit
              </a>
            }
          ></Card>
        </div>
      </BlurFade>
      <footer className="mt-20 p-6 flex flex-col justify-center items-center opacity-60">
        Developed by Rainer Morales <br /> © {Years}. All rights reserved
      </footer>
    </>
  );
}
export default Content;
