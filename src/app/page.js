"use client";
import Navbar from "@/components/navbar";
import { AlgorithmCards } from "./components/algorithm-cards";
import Footer from "./components/footer";
import Hero from "./components/hero";

   
export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar title="Algorithm Visualizer"/>
      <Hero/>
    {/* <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Algorithm Visualizer
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl">
          Explore and visualize various algorithms to better understand their inner workings and efficiency.
        </p>
      </div>
    </header> */}
    <main className="container mx-auto py-12 px-4">
      <AlgorithmCards />
    </main>
    
    {/* Developer Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="developer-glass flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto p-8">
          {/* Developer Image */}
          <div className="flex-shrink-0">
            <img 
              src="/images/developer_image.jpg" 
              alt="Ashis Rahman" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          
          {/* Developer Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Ashis Rahman
            </h2>
            <p className="text-xl text-primary font-semibold mb-4">
              Developer | AlgorithmVisualizer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Education: B.Sc in SWE, DIU.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <Footer/>
  </div>
  
  )
}