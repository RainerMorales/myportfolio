import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsMortarboardFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";

function Content() {
  return (
    <>
      <section className="mt-20  m-auto">
        <div className="w-sm m-auto flex justify-center items-center gap-2">
          <div>
            <div className="font-bold text-3xl"> Hi! I'm Rainer</div>
            <div className="text-md "> Front-End Developer</div>
            <div className="text-md opacity-80">Philippines</div>
            <div className="flex mt-6 gap-2">
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
          <div>
            <img className="w-40 rounded-full" src="profiles.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="mt-20 grid p-4 gap-6 max-w-2xl m-auto ">
        <div className="space-y-4">
          <h1 className="font-bold text-xl flex items-center gap-2">
            <IoBookSharp />
            Summary
          </h1>
          <p className="opacity-80">
            I aim to secure a position in the IT or management sectors, which
            will allow me to utilize my education and skills to contribute to
            the company's operations.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-xl flex items-center gap-2">
            <BsMortarboardFill />
            Education
          </h1>
          <div className="space-x-2">
            <span className="opacity-80 ">BS in Information Technology</span>
            <Badge className="bg-black text-white">2024</Badge>
          </div>
        </div>
        <div className="space-y-4">
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
                  <Badge className="bg-black text-white">{tool}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-2">
            <span className="opacity-80 ">Developer Tools</span>
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
                  <Badge className="bg-black text-white">{tool}</Badge>
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
