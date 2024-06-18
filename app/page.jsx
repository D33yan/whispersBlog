import Image from "next/image";
import { HeroSection } from "./components/herosection";
import { NavBar } from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
     <div className="w-full h-full">
  
      <HeroSection/>
     </div>
    </main>
  );
}
