import "./globals.css";
// components exports
import { Home } from "../components/home.collection/heroBanner";

export default function Page() {
  return (
    <>
      <main className="h-full min-h-screen bg-[#e6e6e6]">
        <Home />
      </main>
    </>
  );
}
