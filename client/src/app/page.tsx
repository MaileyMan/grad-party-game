import Image from "next/image";
import { Carousel } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-y-4">
      <div className="bg-white h-16 w-16 rounded-lg">
        
      </div>
      <input className="h-8 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Name" type="text" />
      <button className="bg-gray-700 p-2 rounded-md">Join game</button>
      <Carousel />
    </main>
  );
}
