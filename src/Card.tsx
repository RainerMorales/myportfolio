import { Badge } from "@/components/ui/badge";
import { ReactElement } from "react";

interface cardProps {
  names: string;
  description: string;
  pic: ReactElement;
}
function Card(props: cardProps) {
  return (
    <>
      <div className="card border rounded-md shadow-sm m-auto">
        <figure className="h-50">{props.pic}</figure>
        <div className="card-body">
          <h2 className="card-title">{props.names}</h2>
          <p>{props.description}</p>
          <div className="card-actions justify-between items-center">
            <div className="space-x-2">
              {["React JS", "Tailwind", "Shadcn"].map((names) => (
                <Badge key={names}>{names}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
