import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Works from "@/components/Works";
import Services from "@/components/Services";
export default function Home() {
  return (
   <main className="bg-primary flex flex-col gap-[3em]">
    <div className="flex  flex-col w-full max-w-4xl mx-auto">
    <Hero />
    <Experience />
    <Awards />
    <Works />
    {/* <Pitch /> */}
    {/* <Projects /> */}
      
  </div>
    <Services />
   </main>
  );
}
