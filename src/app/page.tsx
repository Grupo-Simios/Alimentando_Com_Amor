import { Home } from "../components/home.collection/home";
import "./globals.css";

// components exports
import { CallToActionButton } from "@/components/calltoaction.collection/button";




export default function Page() {
  return (
    <>
      <main className="h-full min-h-screen bg-[#e6e6e6]">
      <Home />
      
    </main>
    </>
  
  );
}
