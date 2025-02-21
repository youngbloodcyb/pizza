import { Quiz } from "./quiz";

export default function Home() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-lg font-bold pb-2">
          Find out your pizza political party through this exam
        </h1>
        <hr />
      </div>
      <Quiz />
    </div>
  );
}
