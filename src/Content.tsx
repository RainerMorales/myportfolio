import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsMortarboardFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
function Content() {
  const summary =
    "I'm a front-end developer passionate about creating interactive and visually engaging web experiences. I specialize in React, Vite, Tailwind CSS, and Framer Motion, bringing modern designs to life with smooth animations and responsive layouts. Always eager to learn and improve, I focus on building user-friendly interfaces that enhance the web experience";
  return (
    <>
      
      <section className="grid gap-6 justify-center mt-20 max-w-2xl m-auto">
        <div className="m-auto">
          <img className="w-40 rounded-full" src="profiles.jpg" alt="" />
        </div>
        <div className="text-center">
          <div className="font-bold text-3xl"> Hi! I'm Rainer</div>
          <div className="text-md "> Front-End Developer</div>
          <div className="text-md opacity-80">Bataan,Philippines</div>
          <div className="flex justify-center mt-6 gap-2">
            <a href="">
              <FaSquareGithub size={30} />
            </a>
            <a href="">
              <FaFacebookSquare size={30} />
            </a>
            <a href="">
              <FaSquareInstagram size={30} />
            </a>
          </div>
        </div>
      </section>
      <section className="mt-20 p-4 grid gap-4 max-w-2xl m-auto ">
        <div className="space-y-4 p-6 border rounded-md ">
          <h1 className="font-bold text-xl flex items-center gap-2">
            <IoBookSharp />
            Summary
          </h1>
          <p className="opacity-80">{summary}</p>
        </div>
        <div className="space-y-4 p-6 border rounded-md ">
          <h1 className="font-bold text-xl flex items-center gap-2">
            <BsMortarboardFill />
            Education
          </h1>
          <div className="space-x-2">
            <span className="opacity-80 ">BS in Information Technology</span>
            <Badge className="">2024</Badge>
          </div>
        </div>
        <div className="space-y-4 p-6 border rounded-md ">
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
            <ul className="flex  flex-wrap gap-2 mt-1">
              {[
                "Git",
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
      </section>
    </>
  );
}
export default Content;
