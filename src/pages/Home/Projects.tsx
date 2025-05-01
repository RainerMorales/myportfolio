import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
function Projects() {
  return (
    <>
      <BlurFade className="mt- max-w-4xl m-auto  rounded-sm">
        <div className="flex items-center p-4 space-x-4">
          <Link
            className="text-sm link link-hover font-mono opacity-80 flex items-center gap-2"
            to={"/"}
          >
            <FaArrowLeftLong />
            Home
          </Link>
          <div className="flex items-center gap-2 text-xl"><CgWebsite/>Recent Projects</div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4   gap-4 ">
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
                className="link link-hover font-mono opacity-80"
                href="https://react-todolist2025.vercel.app/"
              >
                Visit
              </a>
            }
          ></Card>
          <Card
            names={"Weather App"}
            description={
              "I'm developing a weather app using React and the OpenWeather API to provide real-time weather updates with an intuitive user interface"
            }
            pic={
              <img
                className="w-full h-full lg:object-cover object-contain"
                src="Weather.png"
                alt="image"
              />
            }
            link={
              <a
                className="link link-hover font-mono"
                href="https://weather-app2025.vercel.app/"
              >
                Visit
              </a>
            }
          ></Card>
        </div>
      </BlurFade>
    </>
  );
}

export default Projects;
