import "./globals.css";
// components exports
import { Home } from "../components/home.collection/heroBanner";

function Page() {
  return (
    <>
      <main className="h-full bg-[#e6e6e6]">
        <Home />
      </main>
    </>
  );
}

export default Page;