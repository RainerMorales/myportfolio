import { Badge } from "@/components/ui/badge";

interface cardProps{
    names:string
    description:string
}
function Card(props:cardProps) {
  return (
    <>
      <div className="card border rounded-md shadow-sm m-auto">
        <figure>
          <img src="todo.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.names}</h2>
          <p>{props.description}</p>
          <div className="card-actions justify-between items-center">
            <div className="space-x-2">
              {["React JS", "Tailwind", "Shadcn"].map((names) => (
                <Badge key={names}>{names}</Badge>
              ))}
            </div>
            <a
              href="https://react-todolist2025.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn border-2 rounded-full">Visit</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
